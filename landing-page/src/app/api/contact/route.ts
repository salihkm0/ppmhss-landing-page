import { NextResponse } from "next/server";
import { connectToDatabase, fallbackStore } from "@/lib/mongodb";
import { Contact } from "@/models/Contact";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, department, subject, message } = body;

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { success: false, message: "Please fill in all mandatory fields (name, email, subject, message)" },
        { status: 400 }
      );
    }

    const { isConnected } = await connectToDatabase();
    if (isConnected) {
      const created = await Contact.create({
        name,
        email,
        phone,
        department: department || "General Administration",
        subject,
        message,
        status: "Unread",
      });
      return NextResponse.json({ success: true, message: "Thank you for reaching out. Your communication has been dispatched to the designated office.", data: created });
    } else {
      const fallbackItem = {
        id: "msg_" + Date.now(),
        name,
        email,
        phone,
        department: department || "General Administration",
        subject,
        message,
        createdAt: new Date().toISOString(),
      };
      fallbackStore.contacts.unshift(fallbackItem);
      return NextResponse.json({ success: true, message: "Thank you for reaching out. Your communication has been dispatched to the designated office.", data: fallbackItem });
    }
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : "Internal server error";
    return NextResponse.json(
      { success: false, message: errorMessage },
      { status: 500 }
    );
  }
}


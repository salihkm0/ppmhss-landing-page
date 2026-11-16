import { NextResponse } from "next/server";
import { validateAdminCredentials, signSession, ADMIN_COOKIE_NAME } from "@/lib/auth";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { username, password } = body;

    if (!username || !password) {
      return NextResponse.json(
        { success: false, error: "Username and password are required" },
        { status: 400 }
      );
    }

    const isValid = validateAdminCredentials(username.trim(), password.trim());
    if (!isValid) {
      return NextResponse.json(
        { success: false, error: "Invalid username or password" },
        { status: 401 }
      );
    }

    const token = signSession({
      username: username.trim(),
      role: "admin",
      exp: Date.now() + 7 * 24 * 60 * 60 * 1000, // 7 days
    });

    const response = NextResponse.json({
      success: true,
      message: "Authentication successful",
      user: { username: username.trim(), role: "admin" },
    });

    response.cookies.set({
      name: ADMIN_COOKIE_NAME,
      value: token,
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 7 * 24 * 60 * 60,
    });

    return response;
  } catch (err: any) {
    return NextResponse.json(
      { success: false, error: err.message || "Login failed" },
      { status: 500 }
    );
  }
}


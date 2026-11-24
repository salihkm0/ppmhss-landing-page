import os
import sys
from reportlab.lib.pagesizes import A4
from reportlab.lib import colors
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.platypus import (
    SimpleDocTemplate,
    Paragraph,
    Spacer,
    Table,
    TableStyle,
    PageBreak,
    KeepTogether,
    HRFlowable,
)
from reportlab.pdfgen import canvas

class NumberedCanvas(canvas.Canvas):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self._saved_page_states = []

    def showPage(self):
        self._saved_page_states.append(dict(self.__dict__))
        self._startPage()

    def save(self):
        num_pages = len(self._saved_page_states)
        for state in self._saved_page_states:
            self.__dict__.update(state)
            self.draw_page_decorations(num_pages)
            super().showPage()
        super().save()

    def draw_page_decorations(self, page_count):
        self.saveState()
        
        # Don't draw running header on cover page (Page 1)
        if self._pageNumber > 1:
            # Running Header
            self.setFont("Helvetica-Bold", 8)
            self.setFillColor(colors.HexColor("#008744"))
            self.drawString(54, 802, "PPM HSS KOTTUKKARA")
            self.setFont("Helvetica", 8)
            self.setFillColor(colors.HexColor("#64748b"))
            self.drawString(162, 802, "|   Official Web Portal & Institutional CMS Proposal")
            
            # Header rule
            self.setStrokeColor(colors.HexColor("#cbd5e1"))
            self.setLineWidth(0.75)
            self.line(54, 794, 541, 794)

        # Footer on all pages
        self.setStrokeColor(colors.HexColor("#e2e8f0"))
        self.setLineWidth(0.75)
        self.line(54, 45, 541, 45)

        self.setFont("Helvetica", 8)
        self.setFillColor(colors.HexColor("#64748b"))
        self.drawString(54, 32, "Confidential • Prepared for Nediyiruppu Muslim Educational Association")
        page_text = f"Page {self._pageNumber} of {page_count}"
        self.drawRightString(541, 32, page_text)

        self.restoreState()


def create_proposal_pdf(output_path):
    # A4: 595.27 x 841.89 points. Margins: 54 pt (0.75 in) left/right/top/bottom
    # Printable width: 595.27 - 108 = 487.27 pt (~487 pt)
    # Printable height: 841.89 - 108 = 733.89 pt
    doc = SimpleDocTemplate(
        output_path,
        pagesize=A4,
        leftMargin=54,
        rightMargin=54,
        topMargin=54,
        bottomMargin=54,
    )

    styles = getSampleStyleSheet()

    # Color definitions
    c_primary = colors.HexColor("#008744")      # PPM HSS Green
    c_primary_dark = colors.HexColor("#006030")
    c_dark = colors.HexColor("#0f172a")          # Slate 900
    c_body = colors.HexColor("#334155")          # Slate 700
    c_muted = colors.HexColor("#64748b")         # Slate 500
    c_border = colors.HexColor("#cbd5e1")        # Slate 300
    c_light_bg = colors.HexColor("#f8fafc")      # Slate 50
    c_green_bg = colors.HexColor("#f0fdf4")      # Emerald 50
    c_green_border = colors.HexColor("#86efac")  # Emerald 300
    c_red_bg = colors.HexColor("#fef2f2")        # Red 50
    c_red_border = colors.HexColor("#fca5a5")    # Red 300

    # Custom typography styles
    styles.add(ParagraphStyle(
        name="DocSuperTitle",
        fontName="Helvetica-Bold",
        fontSize=8.5,
        leading=11,
        textColor=c_primary,
        textTransform="uppercase",
        spaceAfter=4,
    ))

    styles.add(ParagraphStyle(
        name="DocTitle",
        fontName="Helvetica-Bold",
        fontSize=21,
        leading=25,
        textColor=c_dark,
        spaceAfter=6,
    ))

    styles.add(ParagraphStyle(
        name="DocSubtitle",
        fontName="Helvetica",
        fontSize=10,
        leading=14,
        textColor=c_primary_dark,
        spaceAfter=10,
    ))

    styles.add(ParagraphStyle(
        name="SectionHeading",
        fontName="Helvetica-Bold",
        fontSize=12.5,
        leading=16,
        textColor=c_dark,
        spaceBefore=10,
        spaceAfter=6,
        keepWithNext=True,
    ))

    styles.add(ParagraphStyle(
        name="SubSectionHeading",
        fontName="Helvetica-Bold",
        fontSize=9.5,
        leading=13,
        textColor=c_primary,
        spaceBefore=6,
        spaceAfter=3,
        keepWithNext=True,
    ))

    styles.add(ParagraphStyle(
        name="BodyTextCustom",
        fontName="Helvetica",
        fontSize=8.5,
        leading=12.5,
        textColor=c_body,
        spaceAfter=6,
    ))

    styles.add(ParagraphStyle(
        name="BulletText",
        fontName="Helvetica",
        fontSize=8,
        leading=11.5,
        textColor=c_body,
    ))

    styles.add(ParagraphStyle(
        name="TableHead",
        fontName="Helvetica-Bold",
        fontSize=8,
        leading=10.5,
        textColor=colors.white,
    ))

    styles.add(ParagraphStyle(
        name="TableCell",
        fontName="Helvetica",
        fontSize=8,
        leading=11,
        textColor=c_body,
    ))

    styles.add(ParagraphStyle(
        name="TableCellBold",
        fontName="Helvetica-Bold",
        fontSize=8,
        leading=11,
        textColor=c_dark,
    ))

    styles.add(ParagraphStyle(
        name="CalloutText",
        fontName="Helvetica",
        fontSize=8,
        leading=11.5,
        textColor=c_dark,
    ))

    story = []

    # =========================================================================
    # PAGE 1: EXECUTIVE COVER & PROJECT OVERVIEW
    # =========================================================================
    top_bar = Table(
        [[
            Paragraph("<b>PROJECT PROPOSAL & COMMERCIAL SPECIFICATIONS</b>", styles["DocSuperTitle"]),
            Paragraph("<b>REF NO:</b> PPMHSS/WEB/2026/V1", ParagraphStyle("Ref", fontName="Helvetica-Bold", fontSize=8, textColor=c_muted, alignment=2)),
        ]],
        colWidths=[337, 150],
    )
    top_bar.setStyle(TableStyle([
        ("VALIGN", (0, 0), (-1, -1), "MIDDLE"),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 0),
        ("TOPPADDING", (0, 0), (-1, -1), 0),
        ("LEFTPADDING", (0, 0), (-1, -1), 0),
        ("RIGHTPADDING", (0, 0), (-1, -1), 0),
    ]))
    story.append(top_bar)
    story.append(Spacer(1, 8))

    # Hero Banner Box
    title_data = [
        [
            Paragraph("Official Institutional Web Portal & Live Visual CMS", styles["DocTitle"]),
        ],
        [
            Paragraph("High School & Higher Secondary Wing • PPM HSS Kottukkara (DHSE Code: 11024)", styles["DocSubtitle"]),
        ],
        [
            Paragraph(
                "A cutting-edge, high-performance institutional portal designed to unify public brand identity, simplify student-parent access to academic resources, and empower school administration with an in-context visual content management system.",
                styles["BodyTextCustom"]
            )
        ]
    ]
    title_box = Table(title_data, colWidths=[487])
    title_box.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, -1), c_green_bg),
        ("BOX", (0, 0), (-1, -1), 1, c_green_border),
        ("PADDING", (0, 0), (-1, -1), 12),
        ("LINEBELOW", (0, 0), (-1, 0), 0.5, c_green_border),
    ]))
    story.append(title_box)
    story.append(Spacer(1, 10))

    # Meta Details (Client & Project)
    meta_data = [
        [
            Paragraph("<b>CLIENT DETAILS:</b>", styles["TableCellBold"]),
            Paragraph("<b>PROPOSAL HIGHLIGHTS:</b>", styles["TableCellBold"]),
        ],
        [
            Paragraph(
                "<b>Institution:</b> PPM HSS Kottukkara (Estd. 1976)<br/>"
                "<b>Governing Body:</b> Nediyiruppu Muslim Educational Association<br/>"
                "<b>Location:</b> Kottukkara, Kondotty, Malappuram - 673638<br/>"
                "<b>Student Strength:</b> 5,100+ Enrolled Students | 165+ Faculty",
                styles["TableCell"]
            ),
            Paragraph(
                "<b>Scope:</b> 10 Public Core Modules + Live Visual Page Editor<br/>"
                "<b>Total Project Fee:</b> ₹65,000 (Portal & CMS Software Build)<br/>"
                "<b>Hosting & Domain Services:</b> ₹5,000 (Setup & Configuration)<br/>"
                "<b>Warranty & Handover:</b> 30 Days Free Warranty + Full Codebase",
                styles["TableCell"]
            ),
        ]
    ]
    meta_table = Table(meta_data, colWidths=[243, 244])
    meta_table.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, -1), c_light_bg),
        ("BOX", (0, 0), (-1, -1), 0.75, c_border),
        ("INNERGRID", (0, 0), (-1, -1), 0.5, c_border),
        ("PADDING", (0, 0), (-1, -1), 8),
    ]))
    story.append(meta_table)
    story.append(Spacer(1, 10))

    # Executive Overview
    story.append(Paragraph("1. Executive Summary & Strategic Objectives", styles["SectionHeading"]))
    story.append(Paragraph(
        "PPM Higher Secondary School, Kottukkara, has stood as an educational beacon in Malappuram district for nearly five decades. As the school continues to lead in SSLC results (194 Full A+ in 2024), DHSE commerce state ranks, and arts festivals, establishing a contemporary, trustworthy, and feature-rich digital portal is essential.",
        styles["BodyTextCustom"]
    ))
    story.append(Paragraph(
        "This project replaces outdated web structures with a dynamic, enterprise-standard portal that serves five primary institutional objectives:",
        styles["BodyTextCustom"]
    ))

    obj_items = [
        "<b>1. Premier Institutional Identity:</b> Showcase campus infrastructure, academic excellence, leadership, and 50-year heritage with high-definition media and clean, mobile-first design.",
        "<b>2. Seamless Information Architecture:</b> Centralize admissions guidance, academic syllabi, previous years' question banks, exam timetables, scholarships, and circulars for over 5,100 students and parents.",
        "<b>3. Live Visual Page Editor (CMS):</b> Enable designated teachers and school office staff to edit hero sliders, news, achievements, circulars, and teacher rosters directly on an exact visual replica of the live site without touching code.",
        "<b>4. Digital Lead & Admissions Capture:</b> Real-time lead generation for Plus One (+1) and High School admissions with direct inbox notifications for admissions staff.",
        "<b>5. Mobile Speed & SEO Optimization:</b> Instant page loading on mobile devices across 4G/5G connections, SCERT/DHSE curriculum compliance, and Google Search discoverability.",
    ]
    obj_table = Table([[Paragraph(o, styles["BulletText"])] for o in obj_items], colWidths=[487])
    obj_table.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, -1), colors.white),
        ("BOX", (0, 0), (-1, -1), 0.5, c_border),
        ("INNERGRID", (0, 0), (-1, -1), 0.5, colors.HexColor("#f1f5f9")),
        ("PADDING", (0, 0), (-1, -1), 6),
    ]))
    story.append(obj_table)

    # End of Page 1
    story.append(PageBreak())

    # =========================================================================
    # PAGE 2: SCOPE OF WORK (PART 1: MODULES 1 TO 4)
    # =========================================================================
    story.append(Paragraph("2. Detailed Scope of Work & Functional Modules (Part 1)", styles["SectionHeading"]))
    story.append(Paragraph(
        "The web portal is architected across 10 functional modules derived directly from client specifications, engineered for clarity, speed, and ease of administration:",
        styles["BodyTextCustom"]
    ))

    p2_modules = [
        ("Module 1: Home Page (Interactive Public Landing Page)", [
            "Hero Carousel Slider with high-impact campus photographs, promotional badges, headlines, and statistics counters.",
            "Tagline and Welcome Note excerpt from the Principal and Manager, linked to administrative profiles.",
            "Quick-Access Service Tiles: Direct shortcuts to Admissions, Academic Calendar, Latest News, and ERP Login Portal.",
            "Scrolling Urgent Marquee Ticker: Top flash banner for immediate notifications (exam fees, holiday announcements).",
            "Latest 3-5 News & Events dynamic card feed automatically pulled from the school database.",
            "Hall of Achievements Snapshot: Highlights of SSLC 100% pass, DHSE Commerce state ranks, Kalolsavam, and sports trophies.",
            "Photo Gallery Showcase: Responsive thumbnail grid (3-6 photos) linked directly to the full album gallery.",
            "Comprehensive Institutional Footer: Address, contact directory, embedded Google Map, social media links, and quick links.",
        ]),
        ("Module 2: The Institute (Identity & Governance)", [
            "2.1 About Us: Detailed founding history (1976), Nediyiruppu MEA profile, board affiliation (SCERT/DHSE), school code (11024), motto, emblem description, and campus statistics (5,100+ students, 165+ faculty, 4.5 acres).",
            "2.2 Vision & Mission: Comprehensive vision statement, mission manifesto, and institutional core values.",
            "2.3 Administration: Dedicated profiles with high-resolution portraits, official messages, roles, and tenures for Manager, Principal, and Headmaster.",
            "2.4 Parent-Teacher Association (PTA): Executive committee directory, PTA objectives, activities, meeting notices, and dedicated query helpline.",
        ]),
        ("Module 3: Academics & Approved Streams", [
            "3.1 High School Wing: Classrooms, specialized physics, chemistry, biology, and computer labs, library facilities, and teacher faculty directory with subjects and qualifications.",
            "3.2 Higher Secondary Approved Streams: Comprehensive program pages for Science (Biology - Code 01), Science (Computer Science - Code 05), Commerce (Computer Application - Code 11), and Humanities (Code 19), with intake seat numbers, core combinations, second languages, and career roadmaps.",
            "3.3 Academic Calendars: Downloadable PDF academic calendars by year with term start/end dates, holidays, examination windows, and PTA meetings.",
            "3.4 Curriculum & Syllabus: SCERT & DHSE syllabus breakdowns, class-wise documents, and student co-curricular frameworks.",
            "3.5 Scholarships & Endowments: Directory of National (NSP/NMMS), State, and PPM Alumni merit scholarships, eligibility criteria, application deadlines, and downloadable application forms.",
        ]),
        ("Module 4: Admissions Portal & Lead Capture", [
            "Step-by-step admission roadmap for Plus One (+1 HSCAP Single Window) and High School.",
            "Class-wise and stream-wise eligibility criteria, age limits, and subject requirements.",
            "Important dates schedule (application opening, option entry, verification, and closure).",
            "Fee structure breakdown and downloadable official fee schedule document.",
            "Mandatory documents checklist for admission day verification.",
            "Online Admission Inquiry Form capturing student name, parent phone, email, seeking grade, marks %, and notes directly into the Admin Lead Inbox.",
            "Frequently Asked Questions (FAQs) and dedicated admissions helpdesk contact coordinates.",
        ]),
    ]

    for title, items in p2_modules:
        b_rows = [Paragraph(f"• {it}", styles["BulletText"]) for it in items]
        c_table = Table([[b] for b in b_rows], colWidths=[475])
        c_table.setStyle(TableStyle([
            ("VALIGN", (0, 0), (-1, -1), "TOP"),
            ("TOPPADDING", (0, 0), (-1, -1), 1),
            ("BOTTOMPADDING", (0, 0), (-1, -1), 1),
            ("LEFTPADDING", (0, 0), (-1, -1), 4),
            ("RIGHTPADDING", (0, 0), (-1, -1), 0),
        ]))
        mod_box = Table([[Paragraph(f"<b>{title}</b>", styles["SubSectionHeading"])], [c_table]], colWidths=[487])
        mod_box.setStyle(TableStyle([
            ("BACKGROUND", (0, 0), (-1, -1), c_light_bg),
            ("BOX", (0, 0), (-1, -1), 0.5, c_border),
            ("PADDING", (0, 0), (-1, -1), 5),
            ("LINEBELOW", (0, 0), (-1, 0), 0.5, colors.HexColor("#e2e8f0")),
        ]))
        story.append(mod_box)
        story.append(Spacer(1, 5))

    # End of Page 2
    story.append(PageBreak())

    # =========================================================================
    # PAGE 3: SCOPE OF WORK (PART 2: MODULES 5 TO 10)
    # =========================================================================
    story.append(Paragraph("2. Detailed Scope of Work & Functional Modules (Part 2)", styles["SectionHeading"]))

    p3_modules = [
        ("Module 5: Resources & Academic Download Center", [
            "5.1 Previous Question Papers: Categorized repository organized by class (Class 8, 9, SSLC, +1, +2), subject, and examination year with one-click PDF downloads.",
            "5.2 Question Bank: Topic-wise and chapter-wise revision worksheets and question sets.",
            "5.3 Holiday Worksheets: Vacation homework sheets organized by break periods (Summer, Onam, Christmas).",
            "5.4 Official Downloads: Chronological Government Orders (GOs), directorate circulars, examination timetables, and common downloadable forms (TC request, leave form, bonafide certificate).",
        ]),
        ("Module 6: Campus Life & Student Activities", [
            "6.1 Campus Infrastructure: Showcase with photos of 4.5-acre campus, ICT smart classrooms, multi-lab complex, central library, auditorium, cafeteria, and sports grounds.",
            "6.2 Co-curriculars: Profiles for Arts (Kalolsavam training, music, dance), Sports (football, athletics, grounds, coaching), and student clubs.",
            "6.3 Active Clubs: NSS Unit 045, NCC Army Wing, Bharat Scouts & Guides, Mathrubhumi SEED / Eco Club, STEM & Robotics Club, and Sahitya Samajam (Literary & Debate Club) with activities and coordinator details.",
            "6.4 Achievements Hall of Fame: Year-wise showcase of academic toppers (SSLC 194 Full A+), State kalolsavam A-grades, and district championships.",
            "6.5 Photo & Media Gallery: Categorized photo albums (Campus, Labs, Arts, Sports, Events) with responsive lightbox viewer and optional video gallery embed.",
        ]),
        ("Module 7: News, Events & Digital Noticeboard", [
            "7.1 School News: Chronological news articles with dates, cover images, and full article view.",
            "7.2 Campus Events: Upcoming and past event cards with date, time, venue, and descriptions.",
            "7.3 Time-Sensitive Announcements: Flash banners for exam dates, local holidays, and admission dates.",
            "7.4 Digital Noticeboard: Digital archive of physical noticeboard circulars with PDF download links.",
        ]),
        ("Module 8: Alumni Network", [
            "Alumni Association overview, leadership committee, and objectives.",
            "Notable Alumni Spotlight featuring distinguished alumni in civil services, medicine, engineering, and academia.",
            "Alumni reunion updates, meeting schedules, and photo highlights.",
            "Online Alumni Registration Form with instant verification status management in Admin panel.",
        ]),
        ("Module 9: ERP & Portal Gateways (Logins Hub)", [
            "Centralized quick-gateway portal for Teachers, Students, and Parents.",
            "Direct secure redirection bridges to external ERP/LMS software (e.g. Kite Sampoorna, HSCAP, or school management software).",
        ]),
        ("Module 10: Contact Us & Campus Helpdesk", [
            "Interactive embedded Google Map with campus coordinates and route guidance.",
            "Official office phone numbers, email addresses, and postal address.",
            "Departmental directory: Principal's Office, Admissions Desk, Higher Secondary Office, High School Office.",
            "Live Inbound Contact Message Form with instant submission into the Admin Message Inbox.",
            "Office working hours, visiting timings, and verified social media channels.",
        ]),
    ]

    for title, items in p3_modules:
        b_rows = [Paragraph(f"• {it}", styles["BulletText"]) for it in items]
        c_table = Table([[b] for b in b_rows], colWidths=[475])
        c_table.setStyle(TableStyle([
            ("VALIGN", (0, 0), (-1, -1), "TOP"),
            ("TOPPADDING", (0, 0), (-1, -1), 1),
            ("BOTTOMPADDING", (0, 0), (-1, -1), 1),
            ("LEFTPADDING", (0, 0), (-1, -1), 4),
            ("RIGHTPADDING", (0, 0), (-1, -1), 0),
        ]))
        mod_box = Table([[Paragraph(f"<b>{title}</b>", styles["SubSectionHeading"])], [c_table]], colWidths=[487])
        mod_box.setStyle(TableStyle([
            ("BACKGROUND", (0, 0), (-1, -1), c_light_bg),
            ("BOX", (0, 0), (-1, -1), 0.5, c_border),
            ("PADDING", (0, 0), (-1, -1), 4.5),
            ("LINEBELOW", (0, 0), (-1, 0), 0.5, colors.HexColor("#e2e8f0")),
        ]))
        story.append(mod_box)
        story.append(Spacer(1, 4))

    # End of Page 3
    story.append(PageBreak())

    # =========================================================================
    # PAGE 4: ADMINISTRATIVE CMS & TECHNOLOGY ARCHITECTURE
    # =========================================================================
    story.append(Paragraph("3. Administrative CMS & In-Context Visual Editor", styles["SectionHeading"]))
    story.append(Paragraph(
        "A major breakthrough of this proposal is the replacement of legacy database tables with a custom-engineered <b>In-Context Visual Page Editor</b> built exclusively for school administrators:",
        styles["BodyTextCustom"]
    ))

    cms_items = [
        ("Exact Public Replica Mode", "The admin panel mirrors the exact public visual layout of the website. Administrators see real card previews, hero sliders, and gallery grids instead of cryptic spreadsheets."),
        ("In-Context Inline Editing", "Floating '[Edit]' buttons appear directly over hero slides, 'About Our School' 3-photo collage, 'Why PPM HSS' feature cards, and stream details, opening instant modal editors."),
        ("One-Click Publishing & File Uploads", "Upload official circulars, exam timetables, question banks, and gallery photos with instantaneous synchronization across all devices."),
        ("Admissions Leads & Messages Inbox", "Captured online student admission applications and contact queries are delivered to an organized admin inbox with status tracking (Verified / In-Review)."),
        ("Multi-Role Security & Session Control", "Protected by encrypted administrator authentication, JWT session validation, and automatic session expiration for maximum security."),
    ]
    cms_rows = []
    for h, desc in cms_items:
        cms_rows.append([
            Paragraph(f"<b>{h}</b>", styles["TableCellBold"]),
            Paragraph(desc, styles["TableCell"]),
        ])
    cms_table = Table(cms_rows, colWidths=[150, 337])
    cms_table.setStyle(TableStyle([
        ("VALIGN", (0, 0), (-1, -1), "TOP"),
        ("GRID", (0, 0), (-1, -1), 0.5, c_green_border),
        ("BACKGROUND", (0, 0), (-1, -1), c_green_bg),
        ("PADDING", (0, 0), (-1, -1), 5),
    ]))
    story.append(cms_table)
    story.append(Spacer(1, 10))

    story.append(Paragraph("4. Technical Architecture & Non-Functional Deliverables", styles["SectionHeading"]))
    story.append(Paragraph(
        "The platform is built on modern enterprise web technologies, ensuring maximum speed, bank-grade security, and zero ongoing maintenance bottlenecks:",
        styles["BodyTextCustom"]
    ))

    tech_specs = [
        [Paragraph("ARCHITECTURE LAYER", styles["TableHead"]), Paragraph("SPECIFICATION & TOOLING", styles["TableHead"]), Paragraph("BENEFIT TO THE INSTITUTION", styles["TableHead"])],
        [
            Paragraph("<b>Frontend Framework</b>", styles["TableCellBold"]),
            Paragraph("Next.js 16 (React 19, TypeScript)", styles["TableCell"]),
            Paragraph("Server-Side Rendering (SSR) & Static Optimization delivering sub-second page loads.", styles["TableCell"]),
        ],
        [
            Paragraph("<b>Responsive Styling</b>", styles["TableCellBold"]),
            Paragraph("Tailwind CSS v4 & Lucide Icons", styles["TableCell"]),
            Paragraph("Fluid layouts across smartphones, tablets, and high-res desktops with official branding.", styles["TableCell"]),
        ],
        [
            Paragraph("<b>Backend & API Layer</b>", styles["TableCellBold"]),
            Paragraph("Next.js Serverless Routes / Node.js", styles["TableCell"]),
            Paragraph("RESTful endpoints handling lead capture, file downloads, and content updates with zero server lag.", styles["TableCell"]),
        ],
        [
            Paragraph("<b>Database & Storage</b>", styles["TableCellBold"]),
            Paragraph("MongoDB Atlas / Cloud Storage", styles["TableCell"]),
            Paragraph("Fault-tolerant schema with in-memory fallback guarantees 99.9% public portal uptime.", styles["TableCell"]),
        ],
        [
            Paragraph("<b>Security & Edge CDN</b>", styles["TableCellBold"]),
            Paragraph("HTTPS / SSL, Cloudflare CDN", styles["TableCell"]),
            Paragraph("Automated TLS/SSL certificates, DDoS mitigation, and edge caching for high traffic.", styles["TableCell"]),
        ],
    ]
    t_table = Table(tech_specs, colWidths=[115, 145, 227])
    t_table.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, 0), c_dark),
        ("VALIGN", (0, 0), (-1, -1), "TOP"),
        ("GRID", (0, 0), (-1, -1), 0.5, c_border),
        ("ROWBACKGROUNDS", (0, 1), (-1, -1), [colors.white, c_light_bg]),
        ("PADDING", (0, 0), (-1, -1), 5),
    ]))
    story.append(t_table)
    story.append(Spacer(1, 8))

    # Quality Assurance Highlights
    qa_box = Table([[
        Paragraph(
            "<b>ENTERPRISE QUALITY STANDARDS:</b><br/>"
            "• <b>Cross-Browser Compatibility:</b> Tested seamlessly on Chrome, Safari, Edge, Firefox, and mobile WebKit.<br/>"
            "• <b>Search Engine Optimization (SEO):</b> Pre-configured OpenGraph metadata, structured JSON-LD schema, and sitemap generation for top rankings on Google.<br/>"
            "• <b>Accessibility (a11y):</b> Semantic HTML5 elements, high-contrast typography, and screen-reader accessibility.",
            styles["CalloutText"]
        )
    ]], colWidths=[487])
    qa_box.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, -1), c_light_bg),
        ("BOX", (0, 0), (-1, -1), 0.5, c_border),
        ("PADDING", (0, 0), (-1, -1), 7),
    ]))
    story.append(qa_box)

    # End of Page 4
    story.append(PageBreak())

    # =========================================================================
    # PAGE 5: COMMERCIAL INVESTMENT, EXCLUSIONS, MILESTONES & SIGN-OFF
    # =========================================================================
    story.append(Paragraph("5. Commercial Investment & Pricing Breakdown", styles["SectionHeading"]))
    story.append(Paragraph(
        "The commercial structure for design, development, integration, and setup is itemized below:",
        styles["BodyTextCustom"]
    ))

    price_rows = [
        [
            Paragraph("SL", styles["TableHead"]),
            Paragraph("SERVICE & DELIVERABLE DESCRIPTION", styles["TableHead"]),
            Paragraph("AMOUNT (INR)", styles["TableHead"]),
        ],
        [
            Paragraph("01", styles["TableCellBold"]),
            Paragraph(
                "<b>Complete School Web Portal & In-Context Visual CMS Platform</b><br/>"
                "• Full custom UI/UX design and responsive development for all 10 modules.<br/>"
                "• Custom In-Context Live Visual Page Editor for administrators.<br/>"
                "• Admissions inquiry lead management and public messaging inbox.<br/>"
                "• Academic resources, question paper, and downloadable PDF repository.<br/>"
                "• Photo gallery lightbox, noticeboard, achievements, and alumni registry.<br/>"
                "• 30-Day post-launch warranty, administrator training, and full codebase handover.",
                styles["TableCell"]
            ),
            Paragraph("<b>₹65,000</b>", ParagraphStyle("P1", fontName="Helvetica-Bold", fontSize=10.5, textColor=c_primary, alignment=2)),
        ],
        [
            Paragraph("02", styles["TableCellBold"]),
            Paragraph(
                "<b>Hosting & Domain Deployment, DNS Routing & Security Services</b><br/>"
                "• Professional DNS configuration, nameserver routing, and domain mapping.<br/>"
                "• Production cloud hosting server deployment and environment configuration.<br/>"
                "• SSL (HTTPS) certificate provisioning and security headers hardening.<br/>"
                "• Database cluster deployment, cloud connection, and initial testing.<br/>"
                "• Administrative walkthrough, credential provisioning, and launch verification.",
                styles["TableCell"]
            ),
            Paragraph("<b>₹5,000</b>", ParagraphStyle("P2", fontName="Helvetica-Bold", fontSize=10.5, textColor=c_primary, alignment=2)),
        ],
        [
            Paragraph("", styles["TableCellBold"]),
            Paragraph("<b>TOTAL PROFESSIONAL INVESTMENT</b>", ParagraphStyle("PTot", fontName="Helvetica-Bold", fontSize=9.5, textColor=c_dark)),
            Paragraph("<b>₹70,000</b>", ParagraphStyle("PTotV", fontName="Helvetica-Bold", fontSize=12, textColor=c_primary, alignment=2)),
        ],
    ]
    p_table = Table(price_rows, colWidths=[24, 363, 100])
    p_table.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, 0), c_dark),
        ("VALIGN", (0, 0), (-1, -1), "TOP"),
        ("GRID", (0, 0), (-1, -1), 0.5, c_border),
        ("BACKGROUND", (0, 1), (-1, 1), colors.white),
        ("BACKGROUND", (0, 2), (-1, 2), c_light_bg),
        ("BACKGROUND", (0, 3), (-1, 3), colors.HexColor("#dcfce7")),
        ("PADDING", (0, 0), (-1, -1), 6),
    ]))
    story.append(p_table)
    story.append(Spacer(1, 8))

    # Crucial Clarification on Excluded Third-Party Costs
    notes_content = (
        "<b>IMPORTANT BILLING CLARIFICATIONS & THIRD-PARTY RECURRING CHARGES:</b><br/>"
        "• <b>Scope of ₹65,000 Fee:</b> Covers the complete software engineering, design, database setup, and custom CMS build.<br/>"
        "• <b>Scope of ₹5,000 Fee:</b> Covers technical domain setup, cloud deployment, SSL installation, and integration services.<br/>"
        "• <b>Excluded Third-Party Recurring Costs (Billed directly at actuals to client):</b><br/>"
        "  1. <i>Domain Registration & Annual Renewal:</i> (e.g. .edu.in, .ac.in, or .com purchased from registrar at actual cost).<br/>"
        "  2. <i>Cloud Server Hosting Charge:</i> (billed directly by cloud hosting provider at actuals, e.g. Vercel/VPS/AWS).<br/>"
        "  3. <i>Image & Media Storage Bucket Charges:</i> (cloud storage fees billed at actual usage by providers like AWS S3 or Cloudinary if large-scale raw file archives are stored).<br/>"
        "  4. <i>Third-Party SMS/WhatsApp Gateway:</i> (optional, if transactional OTP or automated SMS messaging is integrated)."
    )
    notes_box = Table([[Paragraph(notes_content, styles["CalloutText"])]], colWidths=[487])
    notes_box.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, -1), c_red_bg),
        ("BOX", (0, 0), (-1, -1), 1, c_red_border),
        ("PADDING", (0, 0), (-1, -1), 7),
    ]))
    story.append(notes_box)
    story.append(Spacer(1, 9))

    # Payment Schedule
    story.append(Paragraph("6. Project Timeline & Payment Milestones", styles["SectionHeading"]))
    mile_rows = [
        [Paragraph("MILESTONE", styles["TableHead"]), Paragraph("DELIVERABLE CRITERIA", styles["TableHead"]), Paragraph("%", styles["TableHead"]), Paragraph("PAYABLE (INR)", styles["TableHead"])],
        [
            Paragraph("<b>Stage 1: Advance</b>", styles["TableCellBold"]),
            Paragraph("Project Initiation, UI/UX structure approval, and database architecture setup.", styles["TableCell"]),
            Paragraph("40%", styles["TableCellBold"]),
            Paragraph("₹26,000", styles["TableCellBold"]),
        ],
        [
            Paragraph("<b>Stage 2: Beta Review</b>", styles["TableCellBold"]),
            Paragraph("Completion of all 10 public modules, Visual CMS integration, and staging demonstration.", styles["TableCell"]),
            Paragraph("40%", styles["TableCellBold"]),
            Paragraph("₹26,000", styles["TableCellBold"]),
        ],
        [
            Paragraph("<b>Stage 3: Launch</b>", styles["TableCellBold"]),
            Paragraph("Final approval, domain mapping, production deployment, admin training, and code handover (+ ₹5,000 hosting service fee).", styles["TableCell"]),
            Paragraph("20%", styles["TableCellBold"]),
            Paragraph("₹18,000", styles["TableCellBold"]),
        ],
    ]
    m_table = Table(mile_rows, colWidths=[95, 252, 40, 100])
    m_table.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, 0), colors.HexColor("#334155")),
        ("VALIGN", (0, 0), (-1, -1), "MIDDLE"),
        ("GRID", (0, 0), (-1, -1), 0.5, c_border),
        ("ROWBACKGROUNDS", (0, 1), (-1, -1), [colors.white, c_light_bg]),
        ("PADDING", (0, 0), (-1, -1), 4.5),
    ]))
    story.append(m_table)
    story.append(Spacer(1, 10))

    # Acceptance & Sign-off Box
    story.append(Paragraph("7. Project Acceptance & Authorization", styles["SectionHeading"]))
    story.append(Paragraph(
        "By signing below, the parties agree to the scope of work, technical specifications, commercial investment, and milestone schedule detailed in this proposal document.",
        styles["BodyTextCustom"]
    ))
    story.append(Spacer(1, 4))

    sign_box_data = [
        [
            Paragraph(
                "<b>PREPARED & SUBMITTED BY:</b><br/><br/><br/>"
                "__________________________________________<br/>"
                "<b>Lead Solutions Architect / Web Lead</b><br/>"
                "Web Engineering & Development Team<br/>"
                "Date: November 23, 2026",
                styles["TableCell"]
            ),
            Paragraph(
                "<b>ACCEPTED & CONFIRMED BY:</b><br/><br/><br/>"
                "__________________________________________<br/>"
                "<b>Authorized Signatory / Management</b><br/>"
                "Nediyiruppu MEA / PPM HSS Kottukkara<br/>"
                "Date: ________________________",
                styles["TableCell"]
            ),
        ]
    ]
    sign_table = Table(sign_box_data, colWidths=[243, 244])
    sign_table.setStyle(TableStyle([
        ("BOX", (0, 0), (-1, -1), 0.5, c_border),
        ("BACKGROUND", (0, 0), (-1, -1), c_light_bg),
        ("PADDING", (0, 0), (-1, -1), 8),
    ]))
    story.append(sign_table)

    # Build document
    doc.build(story, canvasmaker=NumberedCanvas)
    print(f"Proposal PDF generated successfully at: {output_path}")

if __name__ == "__main__":
    out_dir = "/Users/muhammedsalihkm/My Work/My Works/PPM HSS Landing"
    out_file = os.path.join(out_dir, "PPM_HSS_Website_Proposal.pdf")
    create_proposal_pdf(out_file)

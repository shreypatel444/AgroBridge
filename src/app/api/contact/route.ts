// app/api/contact/route.ts
import { NextResponse } from "next/server";
import  prisma  from "../../../../lib/prisma";

export async function POST(req: Request) {
  try {
    const { name, email, phone, message } = await req.json();

    const created = await prisma.contact.create({
      data: {
        name,
        email,
        phone,
        message,
      },
    });

    return NextResponse.json({ success: true, data: created });
  } catch (err) {
    console.error("Contact create error:", err);
    return NextResponse.json({ success: false, error: "Server error" }, { status: 500 });
  }
}

import { NextResponse } from "next/server";
import prisma from "../../../../lib/prisma"; // your prisma client

export async function GET() {
  try {
    const brokers = await prisma.broker.findMany({
      include: { market: true } // fetch market info as well
    });
    return NextResponse.json({ success: true, data: brokers });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false, message: "Failed to fetch brokers" });
  }
}

import { NextResponse } from 'next/server';
import prisma from '../../../../lib/prisma'; // your prisma client

export async function GET() {
  try {
    const markets = await prisma.market.findMany(); // fetch all markets
    return NextResponse.json({ success: true, data: markets });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false, message: 'Failed to fetch markets' });
  }
}

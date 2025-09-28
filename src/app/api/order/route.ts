// /app/api/appointments/route.ts
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { auth } from "@clerk/nextjs/server"; 
import { users } from "@clerk/clerk-sdk-node";
import prisma from "../../../../lib/prisma"; 

export async function POST(req: Request) {
  try {
    // Get the current logged-in user session
    const session = await auth();
    const userId = session.userId;

    if (!userId) {
      return NextResponse.json(
        { success: false, message: "User not logged in" },
        { status: 401 }
      );
    }

    // Fetch user details from Clerk
    const user = await users.getUser(userId);
    const email = user.emailAddresses[0]?.emailAddress;

    if (!email) {
      return NextResponse.json(
        { success: false, message: "User email not found" },
        { status: 400 }
      );
    }

    // Get form data
    const data = await req.json();

    // Store order in DB (no userId column in schema)
    const order = await prisma.order.create({
      data: {
        name: data.name,
        addressLine1: data.addressLine1,
        city: data.city,
        state: data.state,
        category: data.category,
        itemName: data.itemName,
        quantity: parseInt(data.quantity),
        measure: data.measure,
        priceMin: parseFloat(data.priceMin),
        priceMax: parseFloat(data.priceMax),
        readyDate: new Date(data.readyDate),
        role: data.role || "farmer", // default if not provided
      },
    });

    // Send confirmation email
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const mailOptions = {
  from: `"AgroBridge" <${process.env.SMTP_USER}>`,
  to: email,
  subject: "✅ Your Order Has Been Submitted - AgroBridge",
  html: `
    <div style="font-family: Arial, sans-serif; background: #f9fafb; padding: 20px;">
      <div style="max-width: 600px; margin: auto; background: #ffffff; border-radius: 12px; padding: 25px; box-shadow: 0 4px 10px rgba(0,0,0,0.05);">
        
        <!-- Header -->
        <div style="text-align: center; border-bottom: 2px solid #16a34a; padding-bottom: 10px; margin-bottom: 20px;">
          <h1 style="color: #16a34a; margin: 0;">🌿 AgroBridge</h1>
          <p style="color: #555; margin: 5px 0 0;">Order Confirmation</p>
        </div>

        <!-- Greeting -->
        <p style="font-size: 16px; color: #333;">Hi <strong>${user.firstName || "there"}</strong>,</p>
        <p style="font-size: 15px; color: #444;">
          Your order has been submitted successfully! 🎉  
          Here are the details of your request:
        </p>

        <!-- Order Details -->
        <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
          <tbody>
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>Name:</strong></td>
              <td style="padding: 8px; border-bottom: 1px solid #eee;">${data.name}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>Category:</strong></td>
              <td style="padding: 8px; border-bottom: 1px solid #eee;">${data.category}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>Item Name:</strong></td>
              <td style="padding: 8px; border-bottom: 1px solid #eee;">${data.itemName}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>Quantity:</strong></td>
              <td style="padding: 8px; border-bottom: 1px solid #eee;">${data.quantity} ${data.measure}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>Price Range:</strong></td>
              <td style="padding: 8px; border-bottom: 1px solid #eee;">₹${data.priceMin} - ₹${data.priceMax}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>Date Ready:</strong></td>
              <td style="padding: 8px; border-bottom: 1px solid #eee;">${data.readyDate}</td>
            </tr>
            <tr>
              <td style="padding: 8px;"><strong>Address:</strong></td>
              <td style="padding: 8px;">${data.addressLine1}, ${data.city}, ${data.state}</td>
            </tr>
          </tbody>
        </table>

        <!-- Footer -->
        <div style="text-align: center; margin-top: 30px;">
          <p style="font-size: 14px; color: #555;">Thank you for using <strong>AgroBridge</strong> 🌱</p>
          <p style="font-size: 12px; color: #999;">This is an automated email. Please do not reply.</p>
        </div>

      </div>
    </div>
  `,
};

    await transporter.sendMail(mailOptions);

    return NextResponse.json({
      success: true,
      message: "Order created and email sent!",
      order,
    });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { success: false, message: "Failed to create order" },
      { status: 500 }
    );
  }
}

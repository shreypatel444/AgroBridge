"use client";

import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 via-white to-green-100 px-4">
      <div className="w-full max-w-md bg-white shadow-2xl rounded-3xl p-8">
        <h1 className="text-3xl font-extrabold text-green-700 text-center mb-6">
          Join AgroBridge 🌾
        </h1>
        <p className="text-center text-gray-600 mb-6">
          Create your account and connect with farmers & brokers
        </p>
        <div className="flex justify-center">
          <SignUp path="/sign-up" routing="path" signInUrl="/sign-in" />
        </div>
      </div>
    </div>
  );
}

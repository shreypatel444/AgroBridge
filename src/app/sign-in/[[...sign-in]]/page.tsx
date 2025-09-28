"use client";

import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 via-white to-green-100 px-4">
      <div className="w-full max-w-md bg-white shadow-2xl rounded-3xl p-8">
        <h1 className="text-3xl font-extrabold text-green-700 text-center mb-6">
          Welcome Back 🌱
        </h1>
        <p className="text-center text-gray-600 mb-6">
          Sign in to continue your journey with <strong>AgroBridge</strong>
        </p>
        <div className="flex justify-center">
          <SignIn path="/sign-in" routing="path" signUpUrl="/sign-up"  />
        </div>
      </div>
    </div>
  );
}

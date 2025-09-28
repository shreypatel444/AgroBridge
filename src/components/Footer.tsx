"use client";

import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-green-700 text-white py-10 mt-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Logo & About */}
        <div>
          <h2 className="text-2xl font-bold">AgroBridge</h2>
          <p className="mt-4 text-gray-200 text-sm leading-relaxed">
            Bridging the gap between farmers and buyers with transparency 
            and sustainability.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link href="/" className="hover:underline">Home</Link></li>
            <li><Link href="/about" className="hover:underline">About Us</Link></li>
            <li><Link href="/services" className="hover:underline">Services</Link></li>
            <li><Link href="/contact" className="hover:underline">Contact</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Contact</h3>
          <ul className="space-y-2 text-sm">
            <li>Email: support@agrobridge.com</li>
            <li>Phone: +91 98765 43210</li>
            <li>Location: Punjab, India</li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
          <div className="flex space-x-4">
            <Link href="#" aria-label="Facebook" className="hover:text-gray-300">
              <Facebook className="h-6 w-6" />
            </Link>
            <Link href="#" aria-label="Twitter" className="hover:text-gray-300">
              <Twitter className="h-6 w-6" />
            </Link>
            <Link href="#" aria-label="Instagram" className="hover:text-gray-300">
              <Instagram className="h-6 w-6" />
            </Link>
            <Link href="#" aria-label="LinkedIn" className="hover:text-gray-300">
              <Linkedin className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 border-t border-green-600 pt-6 text-center text-sm text-gray-200">
        © {new Date().getFullYear()} AgroBridge. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useUser, UserButton } from "@clerk/nextjs";
import type { NavLink } from "@/types/nav";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const { isSignedIn } = useUser();

  // Base links shown always
  const baseLinks: NavLink[] = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
  ];

  // Extra links only when signed in
  const extraLinks: NavLink[] = isSignedIn
    ? [{ label: "Contact", href: "/contact" }]
    : [];

  const navLinks = [...baseLinks, ...extraLinks];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/70 backdrop-blur-md shadow-lg">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link
            href="/"
            className="text-2xl font-extrabold text-green-700 tracking-tight hover:text-green-800 transition-colors"
          >
            AgroBridge
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative text-gray-800 font-medium transition-colors hover:text-green-700 
                           after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-green-600 
                           after:left-0 after:-bottom-1 after:transition-all after:duration-300 
                           hover:after:w-full"
              >
                {link.label}
              </Link>
            ))}

            {/* Services Dropdown (only if signed in) */}
            {isSignedIn && (
              <div className="relative">
                <button
                  onClick={() => setServicesOpen(!servicesOpen)}
                  className="relative text-gray-800 font-medium transition-colors hover:text-green-700 
                             after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-green-600 
                             after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full"
                >
                  Services ▾
                </button>

                {servicesOpen && (
                  <div className="absolute mt-2 bg-white border border-gray-200 rounded-xl shadow-lg py-2 w-52">
                    <Link
                      href="/services/markets"
                      className="block px-4 py-2 text-gray-700 hover:bg-green-100"
                      onClick={() => setServicesOpen(false)}
                    >
                      Market Locations
                    </Link>
                    <Link
                      href="/services/brokers"
                      className="block px-4 py-2 text-gray-700 hover:bg-green-100"
                      onClick={() => setServicesOpen(false)}
                    >
                      Brokers List
                    </Link>
                    <Link
                      href="/services/book-appointment"
                      className="block px-4 py-2 text-gray-700 hover:bg-green-100"
                      onClick={() => setServicesOpen(false)}
                    >
                      Book Appointment
                    </Link>
                  </div>
                )}
              </div>
            )}

            {/* Sign In / UserButton */}
            {isSignedIn ? (
              <UserButton afterSignOutUrl="/" />
            ) : (
              <Link
                href="/sign-in"
                className="relative text-gray-800 font-medium transition-colors hover:text-green-700 
                           after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-green-600 
                           after:left-0 after:-bottom-1 after:transition-all after:duration-300 
                           hover:after:w-full"
              >
                Sign In
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle Menu"
              className="text-gray-800 hover:text-green-700 focus:outline-none transition-colors"
            >
              {isOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md shadow-lg border-t border-gray-200">
          <div className="px-6 py-4 flex flex-col space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="relative text-gray-800 font-medium transition-colors hover:text-green-700 
                           after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-green-600 
                           after:left-0 after:-bottom-1 after:transition-all after:duration-300 
                           hover:after:w-full"
              >
                {link.label}
              </Link>
            ))}

            {/* Mobile Services Dropdown (only if signed in) */}
            {isSignedIn && (
              <div className="relative">
                <button
                  onClick={() => setServicesOpen(!servicesOpen)}
                  className="relative text-gray-800 font-medium transition-colors hover:text-green-700 
                             after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-green-600 
                             after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full"
                >
                  Services ▾
                </button>

                {servicesOpen && (
                  <div className="mt-2 flex flex-col space-y-1 bg-white border border-gray-200 rounded-xl shadow-lg py-2">
                    <Link
                      href="/services/markets"
                      className="block px-4 py-2 text-gray-700 hover:bg-green-100"
                      onClick={() => {
                        setIsOpen(false);
                        setServicesOpen(false);
                      }}
                    >
                      Market Locations
                    </Link>
                    <Link
                      href="/services/brokers"
                      className="block px-4 py-2 text-gray-700 hover:bg-green-100"
                      onClick={() => {
                        setIsOpen(false);
                        setServicesOpen(false);
                      }}
                    >
                      Brokers List
                    </Link>
                    <Link
                      href="/services/book-appointment"
                      className="block px-4 py-2 text-gray-700 hover:bg-green-100"
                      onClick={() => {
                        setIsOpen(false);
                        setServicesOpen(false);
                      }}
                    >
                      Book Appointment
                    </Link>
                  </div>
                )}
              </div>
            )}

            {/* Mobile Sign In */}
            {isSignedIn ? (
              <UserButton afterSignOutUrl="/" />
            ) : (
              <Link
                href="/sign-in"
                onClick={() => setIsOpen(false)}
                className="relative text-gray-800 font-medium transition-colors hover:text-green-700 
                           after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-green-600 
                           after:left-0 after:-bottom-1 after:transition-all after:duration-300 
                           hover:after:w-full"
              >
                Sign In
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

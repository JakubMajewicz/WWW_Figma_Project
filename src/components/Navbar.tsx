import { MenuIcon, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 transition-all duration-300 bg-white backdrop-blur-sm">
      <div className="max-w-7xl px-8 py-2 mx-auto">
        <div className="flex items-center justify-between h-14">
          <div>
            <h1 className="text-4xl">URBAN HOME</h1>
          </div>
          {/* Nav Links */}
          <div className="hidden md:flex space-x-8">
            <a
              href="#services"
              className="text-dark font-bold hover:text-primary transition-colors"
            >
              Services
            </a>
            <a
              href="#team"
              className="text-dark font-bold hover:text-primary transition-colors"
            >
              Team
            </a>
          </div>

          <button
            className="md:hidden p-2 focus:outline-none"
            onClick={() => setMobileMenuIsOpen(!mobileMenuIsOpen)}
          >
            {mobileMenuIsOpen ? (
              <X className="w-8 h-8" />
            ) : (
              <MenuIcon className="w-8 h-8" />
            )}
          </button>
        </div>
      </div>

      {/* OPCJONALNIE: Skoro stan działa, musimy wyświetlić menu, gdy mobileMenuIsOpen === true */}
      {mobileMenuIsOpen && (
        <div className="md:hidden absolute top-full right-0 w-50 bg-white p-4 flex flex-col gap-4 shadow-lg">
          <a
            href="#servicecard"
            onClick={() => setMobileMenuIsOpen(false)}
            className="text-black font-bold hover:text-primary transition-colors"
          >
            Service
          </a>
          <a
            href="#teamcard"
            onClick={() => setMobileMenuIsOpen(false)}
            className="text-black font-bold hover:text-primary transition-colors"
          >
            Team
          </a>
        </div>
      )}
    </nav>
  );
}

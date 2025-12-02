import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">

          <a href="/" className="text-2xl font-bold text-gray-800 ml-20">
            Logo
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8 mr-30">
          <a
            href="/"
            className="text-gray-700 hover:text-blue-600 transition-colors"
          >
            Home
          </a>
          <a
            href="/produto"
            className="text-gray-700 hover:text-blue-600 transition-colors"
          >
            Produto
          </a>

          <a
            href="/contato"
            className="text-gray-700 hover:text-blue-600 transition-colors"
          >
            Contato
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-gray-700 focus:outline-none"
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 pb-4">
          <div className="flex flex-col space-y-4">
            <a
              href="#home"
              className="text-gray-700 hover:text-blue-600 transition-colors"
              onClick={toggleMenu}
            >
              Home
            </a>
            <a
              href="#about"
              className="text-gray-700 hover:text-blue-600 transition-colors"
              onClick={toggleMenu}
            >
              Sobre
            </a>
            <a
              href="#services"
              className="text-gray-700 hover:text-blue-600 transition-colors"
              onClick={toggleMenu}
            >
              Serviços
            </a>
            <a
              href="#contact"
              className="text-gray-700 hover:text-blue-600 transition-colors"
              onClick={toggleMenu}
            >
              Contato
            </a>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors w-full">
              Começar
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

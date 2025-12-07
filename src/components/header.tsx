import { useState } from "react";

interface HeaderProps {
  ocultarBotaoHome?: boolean;
  ocultarBotaoProduto?: boolean;
  ocultarBotaoContato?: boolean;
}

export default function Header({
  ocultarBotaoHome = false,
  ocultarBotaoProduto = false,
  ocultarBotaoContato = false,
}: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="w-full bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        
        <div className="flex items-center">
          <a href="/" className="text-2xl font-bold text-gray-800 ml-20">
            Logo
          </a>
        </div>

        <div className="hidden md:flex items-center space-x-8 mr-30">
          {!ocultarBotaoHome && (
            <a href="/" className="text-gray-700 hover:text-blue-600 transition-colors">
              Home
            </a>
          )}

          {!ocultarBotaoProduto && (
            <a href="/produto" className="text-gray-700 hover:text-blue-600 transition-colors">
              Produto
            </a>
          )}

          {!ocultarBotaoContato && (
            <a href="/contato" className="text-gray-700 hover:text-blue-600 transition-colors">
              Contato
            </a>
          )}
        </div>
      </div>
    </header>
  );
}

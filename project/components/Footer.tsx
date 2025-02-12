"use client";

export function Footer() {
  return (
    <footer className="bg-primary py-12 text-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
          <div>
            <h3 className="text-lg font-semibold">Sobre Nós</h3>
            <p className="mt-4 text-sm text-gray-300">
              Somos uma empresa comprometida com a excelência e inovação em todos os nossos serviços.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Links Rápidos</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a href="/sobre" className="text-gray-300 hover:text-white">
                  Sobre
                </a>
              </li>
              <li>
                <a href="/cultura" className="text-gray-300 hover:text-white">
                  Cultura
                </a>
              </li>
              <li>
                <a href="/nossas-empresas" className="text-gray-300 hover:text-white">
                  Nossas Empresas
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Contato</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li className="text-gray-300">Email: selecao@grupotapajos.com.br</li>
              <li className="text-gray-300">Telefone: +55 (92) 98115-8728</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Redes Sociais</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Facebook
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-white/10 pt-8 text-center">
          <p className="text-sm text-gray-300">
            © {new Date().getFullYear()} Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
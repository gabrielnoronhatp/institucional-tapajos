import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Grupo Tapajós</h3>
            <p className="text-gray-600">
              Av. Constantino Nery, 1500
              <br />
              Manaus, AM - Brasil
              <br />
              CEP: 69050-001
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <p className="text-gray-600">
              Tel: (92) 3627-8000
              <br />
              Email: contato@grupotapajos.com.br
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Redes Sociais</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-primary">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-gray-600 hover:text-primary">
                <Instagram size={24} />
              </a>
              <a href="#" className="text-gray-600 hover:text-primary">
                <Twitter size={24} />
              </a>
              <a href="#" className="text-gray-600 hover:text-primary">
                <Linkedin size={24} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t text-center">
          <p className="text-gray-600">
            © {new Date().getFullYear()} Grupo Tapajós. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
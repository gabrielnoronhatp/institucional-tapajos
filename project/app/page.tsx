import Image from "next/image";
import Link from "next/link";

const pharmacies = [
  {
    name: "Farma Bem",
    image: "https://images.unsplash.com/photo-1586015555751-63c03a1cd28e?auto=format&fit=crop&q=80&w=2000",
    description: "Sua farmácia de confiança com os melhores preços"
  },
  {
    name: "Flexfarma",
    image: "https://images.unsplash.com/photo-1576602976047-174e57a47881?auto=format&fit=crop&q=80&w=2000",
    description: "Flexibilidade e qualidade em medicamentos"
  },
  {
    name: "Santo Remédio",
    image: "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?auto=format&fit=crop&q=80&w=2000",
    description: "Saúde e bem-estar ao seu alcance"
  },
  {
    name: "FlexAtacadão",
    image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&q=80&w=2000",
    description: "Os melhores preços no atacado"
  }
];

export default function Home() {
  return (
    <>
      <section className="hero-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Inovação em Distribuição
              <br />
              de Medicamentos
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Líder em distribuição farmacêutica na região Norte do Brasil
            </p>
            <Link
              href="/sobre"
              className="inline-block bg-primary text-white px-8 py-3 rounded-full font-medium hover:bg-primary/90 transition-colors"
            >
              Conheça nossa história
            </Link>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Nossas Empresas
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {pharmacies.map((pharmacy) => (
              <div
                key={pharmacy.name}
                className="group relative overflow-hidden rounded-lg shadow-lg transition-transform hover:-translate-y-2"
              >
                <div className="aspect-w-16 aspect-h-9 relative">
                  <Image
                    src={pharmacy.image}
                    alt={pharmacy.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {pharmacy.name}
                  </h3>
                  <p className="text-white/90 text-sm">
                    {pharmacy.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40"
          alt="Hero background"
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Transformando o Futuro da Saúde
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Conectando pessoas, produtos e soluções para impulsionar o acesso à saúde
          </p>
          <Button
            size="lg"
            variant="outline"
            className="bg-white text-primary hover:bg-primary hover:text-white"
          >
            Saiba Mais
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Nossa Atuação
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Desenvolvemos soluções inovadoras que conectam pessoas, produtos e serviços
              para impulsionar o acesso à saúde.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                title: 'Inovação em Saúde',
                description:
                  'Desenvolvemos tecnologias e soluções que transformam a experiência em saúde.',
              },
              {
                title: 'Sustentabilidade',
                description:
                  'Comprometidos com práticas sustentáveis e responsabilidade social.',
              },
              {
                title: 'Excelência Operacional',
                description:
                  'Garantimos eficiência e qualidade em todos os nossos processos.',
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-8">
            Faça Parte da Nossa História
          </h2>
          <Button
            size="lg"
            variant="outline"
            className="bg-white text-primary hover:bg-primary hover:text-white"
          >
            Trabalhe Conosco
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>
    </div>
  );
}
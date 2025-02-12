'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { tpLogo } from '@/app/assets';
import Image from 'next/image';
const navigation = [
  { name: 'Sobre', href: '/sobre' },
  { name: 'Cultura', href: '/cultura' },
  { name: 'Nossas Empresas', href: '/nossas-empresas' },
  { name: 'Convênio', href: '/convenio' },
  { name: 'Nossa Política', href: '/nossa-politica' },
  { name: 'Conteúdo', href: '/conteudo' },
  { name: 'Trabalhe Conosco', href: '/trabalhe-conosco' },
  { name: 'ESG', href: '/esg' },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-primary">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <Image src={tpLogo} alt="Grupo Tapajos" width={150} height={150} />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-semibold leading-6 text-white hover:text-gray-200 transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </nav>
      <motion.div
        initial={false}
        animate={mobileMenuOpen ? 'open' : 'closed'}
        variants={{
          open: { opacity: 1, x: 0 },
          closed: { opacity: 0, x: '100%' },
        }}
        className={`fixed inset-y-0 right-0 z-50 w-full bg-primary px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-white/10 ${
          mobileMenuOpen ? 'block' : 'hidden'
        }`}
      >
        <div className="flex items-center justify-between">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="text-xl font-bold text-white">Cencora</span>
          </Link>
          <button
            type="button"
            className="-m-2.5 rounded-md p-2.5 text-white"
            onClick={() => setMobileMenuOpen(false)}
          >
            <span className="sr-only">Close menu</span>
            <X className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="mt-6 flow-root">
          <div className="-my-6 divide-y divide-gray-500/25">
            <div className="space-y-2 py-6">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-white/10"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </header>
  );
}
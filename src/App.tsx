import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { QuienesSomos } from './components/QuienesSomos';
import { Nosotros } from './components/Nosotros';
import { Proyectos } from './components/Proyectos';
import { Conectemos } from './components/Conectemos';
import { GobiernoCorporativo } from './components/GobiernoCorporativo';
import { Footer } from './components/Footer';
import { AccessibilityWidget } from './components/AccessibilityWidget';
import './i18n/config';
export function App() {
  return <div className="w-full min-h-screen bg-white font-['Poppins']">
      <Header />
      <main>
        <Hero />
        <QuienesSomos />
        <Nosotros />
        <Proyectos />
        <Conectemos />
        <GobiernoCorporativo />
      </main>
      <Footer />
      <AccessibilityWidget />
    </div>;
}
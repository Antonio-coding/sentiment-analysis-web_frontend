// app/page.tsx
"use client";

import { useState } from "react";

import { useRouter } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from '@/components/ui/input';


export default function Home() {
  const [url, setUrl] = useState("");
  const router = useRouter();

  const handleStartAnalysis = () => {
    if (url) {
      router.push(`pages/analyze?siteUrl=${encodeURIComponent(url)}`);
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-between items-center bg-white text-gray-800">
      {/* Navbar */}
      <header className="w-full flex items-center justify-between px-6 py-4 border-b">
        <div className="flex items-center">
          <div className="w-8 h-8 bg-black rounded-full"></div>
          <nav className="ml-4 flex space-x-4">
            <a href="#sobre-nos" className="text-sm text-gray-700 hover:text-black">Sobre nós</a>
            <a href="#como-funciona" className="text-sm text-gray-700 hover:text-black">Como funciona?</a>
            <a href="#documentacao" className="text-sm text-gray-700 hover:text-black">Documentação</a>
          </nav>
        </div>
        <Button className="bg-indigo-500 text-white hover:bg-indigo-600 px-4 py-2 rounded-lg">Contato</Button>
      </header>

      {/* Main Content */}
      <main className="flex flex-col items-center text-center mt-20 px-4">
        <h1 className="text-3xl font-bold mb-4">Análise de Sentimentos e Comentários de Sites</h1>
        <Input
          type="text"
          placeholder="Insira o link do site aqui"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          className="max-w-lg w-full text-center border border-gray-300 rounded-lg p-2 bg-gray-100 text-gray-600 mb-6"
        />
        <Button onClick={handleStartAnalysis} className="flex items-center bg-indigo-500 text-white hover:bg-indigo-600 px-4 py-2 rounded-lg">
          Iniciar análise
          <ArrowRight className="ml-2" />
        </Button>
      </main>

      {/* Footer */}
      <footer className="w-full bg-indigo-100 text-center py-4 text-gray-700">
        <p>Todos os direitos reservados Copyright 2024 ©</p>
      </footer>
    </div>
  );
}

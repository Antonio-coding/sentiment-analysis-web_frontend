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
      router.push(`analyze?siteUrl=${encodeURIComponent(url)}`);
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-between items-center bg-white text-gray-800">

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


    </div>
  );
}

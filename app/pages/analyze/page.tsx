// app/analyze.tsx
"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";


export default function AnalyzePage() {
    const searchParams = useSearchParams();
    const siteUrl = searchParams.get("siteUrl");
    const [isSelecting, setIsSelecting] = useState(false);
    const [selectedCommentSelector, setSelectedCommentSelector] = useState("");
    const router = useRouter();

    const handleSelectComment = () => {
        setIsSelecting(true);
    };

    const handleConfirmSelection = async () => {
        // Envia o selector CSS para a API para análise de sentimento
        if (selectedCommentSelector) {
            await fetch("/api/analyze-comments", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ siteUrl, selector: selectedCommentSelector }),
            });
            alert("Análise concluída!");
            router.push("/");
        }
    };

    return (
        <div className="min-h-screen flex flex-col items-center bg-white text-gray-800">
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
            <main className="flex flex-col items-center text-center mt-10 px-4 w-full">
                <div className="flex justify-center space-x-4">
                    <Button onClick={handleSelectComment} className="bg-gray-500 text-white px-4 py-2 rounded-md">Selecionar comentário</Button>
                    <Button onClick={handleConfirmSelection} disabled={!selectedCommentSelector} className="bg-green-500 text-white px-4 py-2 rounded-md">Concluir</Button>
                </div>
                <p className="mt-4 text-sm text-gray-600">Navegue pelo site e selecione o comentário desejado, após isto clique em "Concluir"</p>

                {/* Exibição do site dentro de um iframe */}
                <div className="mt-8 w-full max-w-4xl h-[600px] border rounded-md overflow-hidden">
                    {siteUrl ? (
                        <iframe
                            src={siteUrl}
                            className="w-full h-full"
                            sandbox="allow-same-origin allow-scripts"
                        ></iframe>
                    ) : (
                        <p className="text-gray-500">URL inválida.</p>
                    )}
                </div>
            </main>

            {/* Footer */}
            <footer className="w-full bg-indigo-100 text-center py-4 text-gray-700 mt-8">
                <p>Todos os direitos reservados Copyright 2024 ©</p>
            </footer>
        </div>
    );
}

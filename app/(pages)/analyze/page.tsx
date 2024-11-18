"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import LoadingScreen from "@/components/LoadingScreen"; // Importe a tela de carregamento

export default function AnalyzePage() {
    const searchParams = useSearchParams();
    const siteUrl = searchParams.get("siteUrl");
    const [isSelecting, setIsSelecting] = useState(false);
    const [selectedCommentSelector, setSelectedCommentSelector] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();

    const handleSelectComment = () => {
        setIsSelecting(true);
        setError(null); // Limpa erro antes de começar a selecionar
        // Aqui você pode implementar a lógica para selecionar o comentário
    };

    const handleConfirmSelection = async () => {
        if (!selectedCommentSelector) {
            setError("Nenhum seletor de comentário selecionado!");
            return;
        }

        setIsLoading(true); // Exibe a tela de carregamento

        try {
            const response = await fetch("/api/analyze-comments", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ siteUrl, selector: selectedCommentSelector }),
            });

            if (!response.ok) throw new Error("Erro ao analisar comentários.");

            alert("Análise concluída!");
            router.push("/resultados");
        } catch (error) {
            setError("Erro ao processar análise.");
            console.error(error);
        } finally {
            setIsLoading(false); // Esconde a tela de carregamento
        }
    };

    if (isLoading) return <LoadingScreen />; // Exibe a tela de carregamento enquanto processa

    return (
        <div className="min-h-screen flex flex-col items-center bg-white text-gray-800">
            {/* Main Content */}
            <main className="flex flex-col items-center text-center mt-10 px-4 w-full">
                <div className="flex justify-center space-x-4">
                    <Button onClick={handleSelectComment} className="bg-gray-500 text-white px-4 py-2 rounded-md">
                        Selecionar comentário
                    </Button>
                    <Button
                        onClick={handleConfirmSelection}
                        disabled={!selectedCommentSelector}
                        className={`px-4 py-2 rounded-md ${selectedCommentSelector
                            ? "bg-green-500 hover:bg-green-600 text-white"
                            : "bg-gray-300 text-gray-600"
                            }`}
                    >
                        Concluir
                    </Button>
                </div>
                <p className="mt-4 text-sm text-gray-600">
                    Navegue pelo site e selecione o comentário desejado, após isto clique em {"Concluir"}.
                </p>
                {error && <p className="text-red-500 mt-2">{error}</p>}

                {/* Exibição do site dentro de um iframe */}
                <div className="mt-8 w-full max-w-4xl h-[600px] border rounded-md overflow-hidden">
                    {siteUrl ? (
                        <iframe
                            title="Selecione o comentário"
                            src={siteUrl}
                            className="w-full h-full"
                            sandbox="allow-same-origin allow-scripts"
                        />
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

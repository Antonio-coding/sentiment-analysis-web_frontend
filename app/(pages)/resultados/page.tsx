"use client";
import Footer from '@/components/Footer';

export default function ResultadosPage() {
    // Simulação de dados (substituir por dados da API)
    const resultados = {
        positivos: [
            "Comentário positivo exemplo 1",
            "Comentário positivo exemplo 2",
            "Comentário positivo exemplo 3",
        ],
        negativos: [
            "Comentário negativo exemplo 1",
            "Comentário negativo exemplo 2",
        ],
        total: { positivos: 70, negativos: 30 }, // Percentuais simulados
    };

    return (
        <div className="min-h-screen bg-white flex flex-col items-center px-6 py-10">
            {/* Título */}
            <h1 className="text-3xl font-bold text-gray-800 mb-8">
                Relatório de Análise de Sentimento
            </h1>

            {/* Botões de Resumo */}
            <div className="flex justify-center space-x-6">
                <button className="px-6 py-3 text-lg font-bold bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600">
                    Positivos
                </button>
                <button className="px-6 py-3 text-lg font-bold bg-red-500 text-white rounded-lg shadow-md hover:bg-red-600">
                    Negativos
                </button>
            </div>

            {/* Gráfico e Separador */}
            <div className="flex justify-between items-center mt-10 w-full max-w-4xl">
                {/* Gráfico Simulado */}
                <div className="w-48 h-48 bg-gray-200 rounded-full flex items-center justify-center shadow-md">
                    <img
                        src="/grafico.png" // Troque por um gráfico dinâmico se necessário
                        alt="Gráfico de Sentimentos"
                        className="object-contain w-40 h-40"
                    />
                </div>
            </div>

            {/* Separador */}
            <div className="mt-6 w-full max-w-4xl h-2 bg-gray-300 rounded-md"></div>

            {/* Comentários Positivos */}
            <div className="mt-10 w-full max-w-4xl">
                <h2 className="text-xl font-bold text-green-600 mb-4">Comentários Positivos</h2>
                {resultados.positivos.map((comentario, index) => (
                    <div
                        key={index}
                        className="flex items-start space-x-3 mb-6 p-4 border-b"
                    >
                        <div className="w-3 h-3 bg-green-500 rounded-full mt-1"></div>
                        <div>
                            <p className="font-semibold">Comentário Positivo</p>
                            <p className="text-sm text-gray-700">{comentario}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Comentários Negativos */}
            <div className="mt-10 w-full max-w-4xl">
                <h2 className="text-xl font-bold text-red-600 mb-4">Comentários Negativos</h2>
                {resultados.negativos.map((comentario, index) => (
                    <div
                        key={index}
                        className="flex items-start space-x-3 mb-6 p-4 border-b"
                    >
                        <div className="w-3 h-3 bg-red-500 rounded-full mt-1"></div>
                        <div>
                            <p className="font-semibold">Comentário Negativo</p>
                            <p className="text-sm text-gray-700">{comentario}</p>
                        </div>
                    </div>
                ))}
            </div>

            <Footer />
        </div>
    );
}

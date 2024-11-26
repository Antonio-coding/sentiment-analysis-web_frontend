export default function ComoFuncionaPage() {
    return (
        <div className="min-h-screen bg-gray-100 text-gray-800 p-6">
            <header className="text-center mb-8">
                <h1 className="text-3xl font-bold">Como Funciona?</h1>
            </header>
            <main className="max-w-4xl mx-auto">
                <p className="text-lg mb-4">
                    O sistema é um analisador de feedback que funciona da seguinte maneira:
                </p>
                <ol className="list-decimal list-inside space-y-3">
                    <li>
                        O usuário copia o comentário de uma publicação ou site (Ctrl+C).
                    </li>
                    <li>
                        Em seguida, cola o comentário na caixa de entrada do nosso site (Ctrl+V).
                    </li>
                    <li>
                        O sistema processa o texto utilizando inteligência artificial que roda no backend para analisar o sentimento e a intenção do comentário.
                    </li>
                    <li>
                        Após a análise, o sistema exibe um resultado preditivo, indicando:
                        <ul className="list-disc ml-6 mt-2 space-y-2">
                            <li>A porcentagem de cada avaliação em estrelas (1 a 5).</li>
                            <li>Insights úteis sobre a tonalidade do feedback, seja positiva, negativa ou neutra.</li>
                        </ul>
                    </li>
                </ol>
                <p className="text-lg mt-4">
                    Nosso sistema suporta comentários em Português e Inglês, ajudando a interpretar feedbacks de diferentes públicos.
                </p>
                <p className="text-lg mt-2">
                    Use nossa ferramenta para obter insights claros e detalhados sobre as opiniões de usuários, ajudando na tomada de decisões estratégicas.
                </p>
            </main>
        </div>
    );
}

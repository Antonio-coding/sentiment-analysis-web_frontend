export default function ComoFuncionaPage() {
    return (
        <div className="min-h-screen bg-gray-100 text-gray-800 p-6">
            <header className="text-center mb-8">
                <h1 className="text-3xl font-bold">Como Funciona?</h1>
            </header>
            <main className="max-w-4xl mx-auto">
                <p className="text-lg mb-4">
                    O sistema funciona da seguinte maneira:
                </p>
                <ol className="list-decimal list-inside space-y-3">
                    <li>
                        O usuário insere a URL do site que deseja analisar.
                    </li>
                    <li>
                        Em seguida, ele seleciona os comentários do site utilizando um seletor CSS.
                    </li>
                    <li>
                        O sistema envia os comentários para uma API que processa os dados e realiza a análise de sentimento.
                    </li>
                    <li>
                        Os resultados são apresentados, indicando a positividade, negatividade ou neutralidade de cada comentário.
                    </li>
                </ol>
                <p className="text-lg mt-4">
                    Com essa análise, é possível obter insights valiosos sobre as opiniões dos usuários em diferentes plataformas.
                </p>
            </main>
        </div>
    );
}

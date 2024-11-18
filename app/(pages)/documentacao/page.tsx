export default function DocumentacaoPage() {
    return (
        <div className="min-h-screen bg-gray-100 text-gray-800 p-6">
            <header className="text-center mb-8">
                <h1 className="text-3xl font-bold">Documentação</h1>
            </header>
            <main className="max-w-4xl mx-auto">
                <p className="text-lg mb-4">
                    Bem-vindo à documentação do projeto de análise de sentimentos. Aqui você encontrará as informações necessárias para utilizar o sistema.
                </p>
                <h2 className="text-2xl font-semibold mt-6 mb-2">Requisitos</h2>
                <ul className="list-disc list-inside space-y-2">
                    <li>Navegador moderno (Google Chrome, Firefox, etc.).</li>
                    <li>API para análise de sentimentos em execução.</li>
                    <li>Seletor CSS válido para capturar os comentários no site desejado.</li>
                </ul>
                <h2 className="text-2xl font-semibold mt-6 mb-2">Como Usar</h2>
                <ol className="list-decimal list-inside space-y-3">
                    <li>Insira a URL do site no campo apropriado.</li>
                    <li>Forneça um seletor CSS para identificar os comentários.</li>
                    <li>Envie os dados para a análise e aguarde os resultados.</li>
                </ol>
            </main>
        </div>
    );
}

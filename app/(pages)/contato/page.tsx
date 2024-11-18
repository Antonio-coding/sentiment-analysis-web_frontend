export default function ContatoPage() {
    return (
        <div className="min-h-screen bg-gray-100 text-gray-800 p-6">
            <header className="text-center mb-8">
                <h1 className="text-3xl font-bold">Contato</h1>
            </header>
            <main className="max-w-4xl mx-auto">
                <p className="text-lg mb-4">
                    Entre em contato com a nossa equipe utilizando as informações abaixo:
                </p>
                <ul className="list-disc list-inside space-y-3">
                    <li>Antônio - antonio@example.com</li>
                    <li>Thiago - thiago@example.com</li>
                    <li>Neto - neto@example.com</li>
                    <li>Outros membros - equipe@example.com</li>
                </ul>
            </main>
        </div>
    );
}

export default function DocumentacaoPage() {
    return (
        <div className="min-h-screen bg-gray-100 text-gray-800 p-6">
            <header className="text-center mb-8">
                <h1 className="text-3xl font-bold">Documentação</h1>
            </header>
            <main className="max-w-4xl mx-auto">
                <p className="text-lg mb-4">
                    Bem-vindo à documentação do projeto de análise de sentimentos. Aqui você encontrará as instruções para configurar e executar o sistema.
                </p>

                <h2 className="text-2xl font-semibold mt-6 mb-2">Visão Geral</h2>
                <p className="text-lg mb-4">
                    Este projeto utiliza um frontend desenvolvido em <strong>Next.js</strong> com <strong>Tailwind CSS</strong> e um backend em <strong>Python</strong>. O backend processa os comentários e retorna uma análise preditiva. A comunicação entre o frontend e o backend é feita por uma API, que utiliza o túnel gerado pelo <strong>ngrok</strong> para expor o servidor local.
                </p>

                <h2 className="text-2xl font-semibold mt-6 mb-2">Requisitos</h2>
                <ul className="list-disc list-inside space-y-2">
                    <li>Conta no <strong>GitHub</strong> para acessar o Codespaces.</li>
                    <li>Python instalado no ambiente do Codespaces para rodar o backend.</li>
                    <li>Instalação do <strong>ngrok</strong> para criar o túnel para o backend.</li>
                    <li>Conta na <strong>Vercel</strong> para hospedar o frontend.</li>
                    <li>Navegador moderno para acessar o site.</li>
                </ul>

                <h2 className="text-2xl font-semibold mt-6 mb-2">Passo a Passo</h2>
                <ol className="list-decimal list-inside space-y-3">
                    <li>
                        <strong>Rodando o Backend no Codespaces:</strong>
                        <ul className="list-disc ml-6 mt-2 space-y-2">
                            <li>Crie um Codespace no repositório que contém o backend.</li>
                            <li>Abra o terminal no Codespaces.</li>
                            <li>Instale as dependências necessárias com o comando: <code>pip install -r requirements.txt</code>.</li>
                            <li>Inicie o servidor local executando o arquivo principal do backend, por exemplo: <code>python app.py</code>.</li>
                        </ul>
                    </li>
                    <li>
                        <strong>Gerando o Túnel com ngrok:</strong>
                        <ul className="list-disc ml-6 mt-2 space-y-2">
                            <li>No terminal do Codespaces, inicie o <strong>ngrok</strong> com o comando: <code>ngrok http 5000</code>.</li>
                            <li>Copie a URL gerada pelo ngrok (exemplo: <code>https://abcd1234.ngrok.io</code>).</li>
                        </ul>
                    </li>
                    <li>
                        <strong>Configurando o Frontend:</strong>
                        <ul className="list-disc ml-6 mt-2 space-y-2">
                            <li>Abra o projeto frontend hospedado na <strong>Vercel</strong>.</li>
                            <li>No painel de configurações da Vercel, adicione uma variável de ambiente chamada <code>API_URL</code> com o valor da URL do túnel gerado pelo ngrok.</li>
                            <li>Reimplante o projeto na Vercel para que o frontend possa se comunicar com o backend.</li>
                        </ul>
                    </li>
                    <li>
                        <strong>Usando o Sistema:</strong>
                        <ul className="list-disc ml-6 mt-2 space-y-2">
                            <li>Acesse o site na Vercel e cole o comentário na caixa de entrada.</li>
                            <li>Clique no botão de análise para enviar o comentário ao backend.</li>
                            <li>Visualize os resultados da análise preditiva diretamente na interface do site.</li>
                        </ul>
                    </li>
                </ol>

                <h2 className="text-2xl font-semibold mt-6 mb-2">Observações</h2>
                <ul className="list-disc list-inside space-y-2">
                    <li>O backend deve estar rodando no Codespaces para que o sistema funcione corretamente.</li>
                    <li>A URL do túnel ngrok tem validade limitada. Sempre atualize a variável de ambiente no frontend ao reiniciar o ngrok.</li>
                    <li>O sistema suporta comentários em Português e Inglês.</li>
                </ul>
            </main>
        </div>
    );
}

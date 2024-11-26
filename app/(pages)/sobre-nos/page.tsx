export default function SobreNosPage() {
    return (
        <div className="min-h-screen bg-gray-100 text-gray-800 p-6">
            <header className="text-center mb-8">
                <h1 className="text-3xl font-bold">Sobre Nós</h1>
            </header>
            <main className="max-w-4xl mx-auto">
                <p className="text-lg mb-4">
                    Este projeto foi desenvolvido inicialmente como parte da disciplina de <strong>Inteligência Artificial</strong> no curso de <strong>Sistemas para Internet</strong> da Universidade Católica de Pernambuco (UNICAP). A proposta do trabalho consistia em criar uma aplicação web capaz de integrar um frontend moderno com um backend robusto para realizar análises de sentimentos em comentários.
                </p>

                <p className="text-lg mb-4">
                    A funcionalidade principal do sistema é utilizar uma <strong>inteligência artificial</strong> para processar os comentários inseridos pelos usuários e fornecer uma análise preditiva da probabilidade de estrelas que cada comentário representaria, em uma escala de 1 a 5. Quanto mais próximo de 5, mais positivo é o comentário, enquanto valores mais próximos de 1 indicam maior negatividade.
                </p>

                <h2 className="text-2xl font-semibold mt-6 mb-2">Características do Projeto</h2>
                <ul className="list-disc list-inside space-y-3">
                    <li>Frontend desenvolvido com <strong>Next.js</strong> e estilizado com <strong>Tailwind CSS</strong>, proporcionando uma interface amigável e responsiva.</li>
                    <li>Backend implementado em <strong>Python</strong>, utilizando bibliotecas modernas de machine learning para análise de sentimentos.</li>
                    <li>Integração entre frontend e backend por meio de uma API, garantindo comunicação fluida e resultados precisos.</li>
                    <li>Capacidade de analisar comentários em Português e Inglês, aumentando a flexibilidade de uso.</li>
                    <li>Escalável e de fácil adaptação para diferentes contextos e plataformas.</li>
                </ul>

                <h2 className="text-2xl font-semibold mt-6 mb-2">Nossa Equipe</h2>
                <p className="text-lg">
                    Este projeto foi desenvolvido por um grupo de estudantes dedicados, que uniram forças para aplicar conceitos de inteligência artificial e desenvolvimento web em um ambiente acadêmico. Detalhes sobre os integrantes da equipe estão disponíveis na aba <strong>Contato</strong>.
                </p>
            </main>
        </div>
    );
}

import Image from "next/image";

const membros = [
    {
        nome: "Antonio Thiago Neto",
        github: "https://github.com/Antonio-coding",
        avatar: "https://avatars.githubusercontent.com/u/112974950?v=4",
    },
    {
        nome: "Danilo Fernandes Rodrigues da Silva",
        github: "https://github.com/danilozxz",
        avatar: "https://avatars.githubusercontent.com/u/149892834?v=4",
    },
    {
        nome: "Carlos Eduardo Bezerra de Lima",
        github: "https://github.com/Eduard0177",
        avatar: "https://avatars.githubusercontent.com/u/131684798?v=4",
    },
    {
        nome: "Danilo Santana",
        github: "https://github.com/DaniloSantos31",
        avatar: "https://avatars.githubusercontent.com/u/130468402?v=4",
    },
    {
        nome: "Gabriel Pereira Araújo",
        github: "https://github.com/GabrielP02",
        avatar: "https://avatars.githubusercontent.com/u/115106954?v=4",
    },
    {
        nome: "Alysson Rafael Freire Silva santos",
        github: "https://github.com/Alysson04",
        avatar: "https://avatars.githubusercontent.com/u/131741122?v=4", // substitua com a URL do avatar
    },
];

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

                <ul className="space-y-6">
                    {membros.map((membro, index) => (
                        <li key={index} className="flex items-center space-x-4">
                            <Image
                                src={membro.avatar}
                                alt={`Foto de perfil de ${membro.nome}`}
                                width={64}
                                height={64}
                                className="rounded-full"
                            />
                            <div>
                                <p className="font-semibold text-lg">{membro.nome}</p>
                                <a
                                    href={membro.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-600 underline"
                                >
                                    {membro.github}
                                </a>
                            </div>
                        </li>
                    ))}
                </ul>
            </main>
        </div>
    );
}

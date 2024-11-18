export default function LoadingScreen() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-white text-gray-800">
            <h1 className="text-4xl font-bold mb-6">Analisando...</h1>
            <div className="w-20 h-4 bg-gray-300 rounded-full overflow-hidden relative mb-4">
                <div className="w-10 h-4 bg-black animate-pulse absolute"></div>
            </div>
            <p className="text-sm text-gray-600 text-center">
                Verificando site... Você poderá selecionar os comentários que deseja analisar
            </p>
        </div>
    );
}

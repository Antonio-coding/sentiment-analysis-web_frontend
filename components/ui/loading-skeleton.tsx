export default function LoadingSkeleton() {
    return (

        <>
            <div className=" flex flex-col items-center justify-center h-screen w-screen">

                {/* Animação da Barra de Carregamento */}
                <div className="relative w-64 h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div className="absolute h-full bg-indigo-500 rounded-full animate-loading-bar"></div>
                </div>
            </div>
        </>
    )
}
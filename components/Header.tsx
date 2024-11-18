import Link from "next/link";
import { Button } from "./ui/button";

import { HomeIcon } from "lucide-react";

export default function Hearder() {
    return (
        <div className="w-full flex items-center justify-between px-6 py-4 border-b">
            {/* Ícone Home */}
            <div className="flex items-center">
                <Link href="/" className="w-8 h-8 flex items-center justify-center bg-gray-200 rounded-full hover:bg-gray-300">
                    <HomeIcon className="h-5 w-5 text-gray-800" />
                </Link>
            </div>

            {/* Links de navegação e botão de contato */}
            <div className="flex items-center space-x-4">
                <nav className="flex space-x-4">
                    <Link href="/sobre-nos" className="text-sm text-gray-700 hover:text-black">
                        Sobre nós
                    </Link>
                    <Link href="/como-funciona" className="text-sm text-gray-700 hover:text-black">
                        Como funciona?
                    </Link>
                    <Link href="/documentacao" className="text-sm text-gray-700 hover:text-black">
                        Documentação
                    </Link>
                </nav>
                <Link href="/contato">
                    <Button className="bg-indigo-500 text-white hover:bg-indigo-600 px-4 py-2 rounded-lg">
                        Contato
                    </Button>
                </Link>
            </div>
        </div>
    )
}
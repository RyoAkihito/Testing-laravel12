import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { Link, usePage } from "@inertiajs/react";
import { useEffect, useState } from "react";

export default function Navbar() {
    const { url } = usePage(); // Mengambil URL saat ini
    const [activePath, setActivePath] = useState(url);

    useEffect(() => {
        setActivePath(url);
    }, [url]);

    return (
        <nav className="flex items-center justify-between p-4 bg-white shadow-md">
            {/* Logo dan Nama Website */}
            <div className="flex items-center gap-2">
                <img src="" alt="Logo" className="h-8 w-8" />
                <span className="text-black font-semibold">MyWebsite</span>
            </div>

            {/* Menu */}
            <div className="hidden md:flex gap-6">
                {[
                    { name: "Home", href: "/" },
                    { name: "About", href: "/about" },
                    { name: "Contact", href: "/contact" }
                ].map((link) => (
                    <Link 
                        key={link.href} 
                        href={link.href} 
                        className={`text-gray-700 hover:text-black ${activePath === link.href ? "font-bold text-black border-b-2 border-black" : ""}`}
                    >
                        {link.name}
                    </Link>
                ))}
            </div>

            {/* Tombol */}
            <div className="flex items-center gap-4">
            <Button className="hidden md:block bg-red-600 text-white font-bold px-4 py-2 rounded-lg hover:bg-red-700">Darurat</Button>
                <button className="md:hidden p-2">
                    <Menu size={24} />
                </button>
            </div>
        </nav>
    );
}

import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
// import Logo from "@/resources/js/assets/logobendera.png";

export default function Navbar() {
    return (
        <nav className="flex items-center justify-between p-4 bg-white shadow-md">
            {/* Logo dan Nama Website */}
            <div className="flex items-center gap-2">
                <img src="" alt="Logo" className="h-8 w-8" />
                <span className="text-black font-semibold">MyWebsite</span>
            </div>

            {/* Menu */}
            <div className="hidden md:flex gap-6">
                <a href="#" className="text-gray-700 hover:text-black">Home</a>
                <a href="#" className="text-gray-700 hover:text-black">About</a>
                <a href="#" className="text-gray-700 hover:text-black">Services</a>
                <a href="#" className="text-gray-700 hover:text-black">Contact</a>
            </div>

            {/* Tombol */}
            <div className="flex items-center gap-4">
                <Button className="hidden md:block">Get Started</Button>
                <button className="md:hidden p-2">
                    <Menu size={24} />
                </button>
            </div>
        </nav>
    );
}

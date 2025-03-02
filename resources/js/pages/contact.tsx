import React from "react";
import { Link } from "@inertiajs/react";
import Navbar from "@/components/navbar-nav";

export default function Contact() {
    return (
        <main>
            <Navbar/>
            <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
                <h1 className="text-4xl font-bold text-blue-600">Contact</h1>
                <p className="mt-2 text-gray-700">Ini adalah halaman contact</p>
                <nav className="mt-4 space-x-4">
                    <Link href="/" className="text-blue-500 hover:underline">Home</Link>
                    <Link href="/about" className="text-blue-500 hover:underline">About</Link>
                    <Link href="/contact" className="text-blue-500 hover:underline">Contact</Link>
                </nav>
            </div>

        </main>
    );
}

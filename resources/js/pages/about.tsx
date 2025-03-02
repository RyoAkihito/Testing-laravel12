import React from "react";
import { Link } from "@inertiajs/react";

export default function About() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
            <h1 className="text-4xl font-bold text-blue-600">Tentang Kami</h1>
            <p className="mt-2 text-gray-700">Ini adalah halaman About.</p>
            <nav className="mt-4 space-x-4">
                <Link href="/" className="text-blue-500 hover:underline">Home</Link>
                <Link href="/about" className="text-blue-500 hover:underline">About</Link>
                <Link href="/contact" className="text-blue-500 hover:underline">Contact</Link>
            </nav>
        </div>
    );
}

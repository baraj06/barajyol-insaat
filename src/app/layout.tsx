import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "Barajyol İnşaat | Modern Yapı ve Mühendislik Çözümleri",
    description: "Barajyol İnşaat ile geleceği inşa ediyoruz. Profesyonel mimari projeler, altyapı ve modern konut çözümleri.",
};

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="tr">
            <body>
                <Navbar />
                <div style={{ minHeight: '100vh', paddingTop: '120px' }}>
                    {children}
                </div>
                <Footer />
            </body>
        </html>
    );
}

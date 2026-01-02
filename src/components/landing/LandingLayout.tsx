import { type ReactNode } from 'react';
import { useLocation } from 'wouter';
import Footer from '../Footer';

interface LandingLayoutProps {
    children: ReactNode;
    backgroundColor?: string;
}

export default function LandingLayout({ children, backgroundColor = 'bg-background' }: LandingLayoutProps) {
    const [, navigate] = useLocation();

    return (
        <div className={`min-h-screen ${backgroundColor}`}>
            {/* Simple header with centered logo */}
            <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-white/10">
                <div className="container mx-auto px-4 py-4 flex justify-center">
                    <button onClick={() => navigate('/')} className="focus:outline-none">
                        <img src="/logo.png" alt="GALAXY CONNECT" className="h-24 w-auto" />
                    </button>
                </div>
            </header>

            {/* Main content with padding for fixed header */}
            <main className="pt-24">
                {children}
            </main>

            {/* Footer */}
            <Footer />
        </div>
    );
}

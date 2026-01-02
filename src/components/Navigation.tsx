import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import { useLocation } from 'wouter';

export default function Navigation() {
    const [isOpen, setIsOpen] = useState(false);
    const [location, setLocation] = useLocation();

    const scrollToSection = (id: string) => {
        // If not on homepage, navigate there first
        if (location !== '/') {
            setLocation('/');
            // Wait for navigation then scroll
            setTimeout(() => {
                const element = document.getElementById(id);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }, 100);
        } else {
            // Already on homepage, just scroll
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
        setIsOpen(false);
    };

    const navigateToPage = (path: string) => {
        setLocation(path);
        setIsOpen(false);
    };

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 glass-dark border-b border-white/10">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <div className="flex items-center">
                        <button onClick={() => setLocation('/')} className="cursor-pointer flex items-center gap-2 group">
                            <img
                                src="/logo.png"
                                alt="GALAXY CONNECT"
                                className="h-16 w-auto transition-transform duration-300 group-hover:scale-105"
                            />
                        </button>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        <button
                            onClick={() => scrollToSection('home')}
                            className="text-white hover:text-primary transition-colors"
                        >
                            Home
                        </button>
                        <button
                            onClick={() => navigateToPage('/features')}
                            className="text-white hover:text-primary transition-colors"
                        >
                            Features
                        </button>
                        <button
                            onClick={() => navigateToPage('/subscriptions')}
                            className="text-white hover:text-primary transition-colors"
                        >
                            Subscription
                        </button>
                        <button
                            onClick={() => navigateToPage('/channels-list')}
                            className="text-white hover:text-primary transition-colors"
                        >
                            Channels
                        </button>
                        <button
                            onClick={() => navigateToPage('/installation-guide')}
                            className="text-white hover:text-primary transition-colors"
                        >
                            Setup Guide
                        </button>
                        <button
                            onClick={() => scrollToSection('testimonials')}
                            className="text-white hover:text-primary transition-colors"
                        >
                            Reviews
                        </button>
                        <Button size="lg" onClick={() => scrollToSection('pricing')}>
                            Get Started
                        </Button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-white"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isOpen && (
                    <div className="md:hidden py-4 space-y-4 animate-fade-in">
                        <button
                            onClick={() => scrollToSection('home')}
                            className="block w-full text-left text-white hover:text-primary transition-colors py-2"
                        >
                            Home
                        </button>
                        <button
                            onClick={() => navigateToPage('/features')}
                            className="block w-full text-left text-white hover:text-primary transition-colors py-2"
                        >
                            Features
                        </button>
                        <button
                            onClick={() => navigateToPage('/subscriptions')}
                            className="block w-full text-left text-white hover:text-primary transition-colors py-2"
                        >
                            Subscription
                        </button>
                        <button
                            onClick={() => navigateToPage('/channels-list')}
                            className="block w-full text-left text-white hover:text-primary transition-colors py-2"
                        >
                            Channels
                        </button>
                        <button
                            onClick={() => navigateToPage('/installation-guide')}
                            className="block w-full text-left text-white hover:text-primary transition-colors py-2"
                        >
                            Setup Guide
                        </button>
                        <button
                            onClick={() => scrollToSection('testimonials')}
                            className="block w-full text-left text-white hover:text-primary transition-colors py-2"
                        >
                            Reviews
                        </button>
                        <Button
                            size="lg"
                            className="w-full"
                            onClick={() => scrollToSection('pricing')}
                        >
                            Get Started
                        </Button>
                    </div>
                )}
            </div>
        </nav>
    );
}

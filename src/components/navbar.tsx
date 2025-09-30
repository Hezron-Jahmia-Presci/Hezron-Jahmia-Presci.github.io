"use client";
import NextLink from "next/link";
import { useEffect, useState } from "react";
import { FaGithub, FaWhatsapp } from "react-icons/fa";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 10);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);


    return (
        <div className="container">
            <nav className={scrolled ? "scrolled" : ""}>
                <section className="navbar-section">
                    <NextLink href="/">
                        <strong><p className="logo">JAHMIA HEZRON PRESCI</p></strong>
                    </NextLink>
                    <ul>
                        <li>
                            <a
                                href="https://wa.me/256752580722"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaWhatsapp className="whatsapp" size={30} />
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://github.com/Hezron-Jahmia-Presci"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaGithub className="github" size={30} />
                            </a>
                        </li>
                    </ul>
                </section>
            </nav>
        </div>
    );
}

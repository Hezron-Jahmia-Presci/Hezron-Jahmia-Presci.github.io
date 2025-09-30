import { content } from "@/content/siteContent";
import FadeInSection from "@/scripts/fadeInSection";
import React from "react";
import { FaEnvelope, FaWhatsapp } from "react-icons/fa";

const Footer = () => {

    return (
        <footer className="footer">
            <div className="container">
                <FadeInSection>
                    <div>
                        <h1>🤝</h1>
                        <h2>{content.cta.title}</h2>
                        <section>
                            <div>
                                <a
                                    href="https://wa.me/256752580722"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <FaWhatsapp className="whatsapp" size={40} />
                                </a>
                            </div>
                            <div>
                                <a
                                    href="mailto:hezron.p.jahmia@gmail.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <FaEnvelope className="whatsapp" size={40} />
                                </a>
                            </div>
                        </section>
                        <p>{content.cta.body}</p>

                    </div>



                </FadeInSection>
            </div>
        </footer>
    );
};

export default Footer;

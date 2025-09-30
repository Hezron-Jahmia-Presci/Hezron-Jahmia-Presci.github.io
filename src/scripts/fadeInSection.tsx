// components/FadeInSection.tsx
"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

interface Props {
    children: React.ReactNode;
    className?: string;
    delay?: number;
}

export default function FadeInSection({ children, className = "", delay = 0 }: Props) {
    const controls = useAnimation();

    // Trigger once when element enters viewport
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [controls, inView]);

    return (
        <motion.div
            ref={ref}
            className={`${className} will-change-transform will-change-opacity`}
            initial="hidden"
            animate={controls}
            transition={{ duration: 0.6, ease: "easeOut", delay }}
            variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 },
            }}
        >
            {children}
        </motion.div>
    );
}

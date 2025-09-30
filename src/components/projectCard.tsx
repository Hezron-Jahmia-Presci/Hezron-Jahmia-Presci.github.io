import React from "react";
import Image from "next/image"; // Next.js optimized Image

interface ProjectCardProps {
    image: string;
    title: string;
    description: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ image, title, description }) => {
    return (
        <div className="projectCard">
            <Image
                src={image}
                alt={title}
                fill
                style={{ objectFit: "cover" }}
                className="project-image"
                priority={true}
            />
            <div className="overlay">
                <h3 >{title}</h3>
                <p >{description}</p>
            </div>
        </div>
    );
};

export default ProjectCard;

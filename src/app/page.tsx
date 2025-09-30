import ProjectCard from "@/components/projectCard";
import { content } from "@/content/siteContent";
import FadeInSection from "@/scripts/fadeInSection";
import Image from "next/image";

export default function Home() {
  return (
    <div className="container">
      <div className="home-page">
        <FadeInSection>
          <div>
            <Image
              src="/favicon.ico"
              alt="Logo"
              width={300}
              height={300}
              className="cover-image"
            />
            <h1>👋🏾 {content.intro.title}</h1>
            <p>{content.intro.body}</p>
            <p>{content.intro.statement}</p>
            <button>
              <strong><a href="mailto:hezron.p.jahmia@gmail.com">Let&apos;s Build Something Together</a></strong>
            </button>
          </div>

        </FadeInSection>

        <FadeInSection>
          <section className="about-section">
            <div>
              <p>{content.about.body}</p>
            </div>
            <div className="about-header">
              <h1>🤵🏾</h1>
              <h2>{content.about.title}</h2>
            </div>
          </section>
        </FadeInSection>

        <FadeInSection>
          <section>
            <div className="skills-header">
              <h1>👨🏾‍💻</h1>
              <h2>{content.skills.title}</h2>
            </div>
            <div className="skills-body">
              <h3>
                <strong>{content.skills.body[0].heading}</strong> —{" "}
                {content.skills.body[0].content}
              </h3>
              <h3>
                <strong>{content.skills.body[1].heading}</strong> —{" "}
                {content.skills.body[1].content}
              </h3>
              <h3>
                <strong>{content.skills.body[2].heading}</strong> —{" "}
                {content.skills.body[2].content}
              </h3>
            </div>
          </section>
        </FadeInSection>

        <FadeInSection>
          <div className="works-section">
            <h1>🏢</h1>
            <h2>{content.works.title}</h2>
          </div>

          <ProjectCard
            image={content.works.contents[0].image}
            title={content.works.contents[0].title}
            description={content.works.contents[0].description}
          />

          <ProjectCard
            image={content.works.contents[1].image}
            title={content.works.contents[1].title}
            description={content.works.contents[1].description}
          />

          <ProjectCard
            image={content.works.contents[2].image}
            title={content.works.contents[2].title}
            description={content.works.contents[2].description}
          />

          <ProjectCard
            image={content.works.contents[3].image}
            title={content.works.contents[3].title}
            description={content.works.contents[3].description}
          />
        </FadeInSection>
      </div>
    </div>
  );
}

import Container from "@/components/container";
import ProjectCard, { ProjectCardProps } from "./project-card";

interface ProjectRowProps {
  left: ProjectCardProps;
  right: ProjectCardProps;
}

export default function ProjectRow({ left, right }: ProjectRowProps) {
  return (
    <section className="py-[64px]">
      <Container>
        <div className="flex flex-col md:flex-row gap-4 md:gap-12">
          <div className="flex-1">
            <ProjectCard {...left} />
          </div>
          <div className="flex-1">
            <ProjectCard {...right} />
          </div>
        </div>
      </Container>
    </section>
  );
}

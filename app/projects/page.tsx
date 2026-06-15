import PageLayout from "../components/PageLayout";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data";

export default function Projects() {
  return (
    <PageLayout title={<h1>Prosjekter</h1>}>
      <div className="flex flex-col gap-4">
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            slug={project.slug}
            title={project.title}
            description={project.description}
          />
        ))}
      </div>
    </PageLayout>
  );
}
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data";

export default function Projects() {
    
    return (
        <main>
            <h1>Prosjekter</h1>
            <div className="flex flex-col gap-4 mt-6">
            {projects.map((project) => (
                <ProjectCard 
                key={project.title}
                slug={project.slug}
                title={project.title}
                description={project.description}
                />
                    ))}
                    </div>
        </main>
    );

}
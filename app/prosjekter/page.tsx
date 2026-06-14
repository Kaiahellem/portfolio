import ProjectCard from "../components/ProjectCard";
import { prosjekter } from "../data";

export default function Prosjekter() {
    
    return (
        <main>
            <h1>Prosjekter</h1>
            <div className="flex flex-col gap-4 mt-6">
            {prosjekter.map((prosjekt) => (
                <ProjectCard 
                key={prosjekt.tittel}
                slug={prosjekt.slug}
                title={prosjekt.tittel}
                description={prosjekt.beskrivelse}
                />
                    ))}
                    </div>
        </main>
    );

}
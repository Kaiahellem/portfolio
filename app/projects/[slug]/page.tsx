import { projects } from "@/app/data";


export default async function ProjectDetail({   
    params,
}: {
    params: Promise<{ slug: string}>;
} ) {

    const { slug } = await params;
    const project = projects.find((p) => p.slug === slug)

    return (
        <main>
            <h1>{project?.title}</h1>
            <p>{project?.description}</p>
        </main>
    );
}
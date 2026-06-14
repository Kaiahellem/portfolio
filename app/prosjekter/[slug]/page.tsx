import { projects } from "@/app/data";


export default async function ProsjektDetalj({   
    params,
}: {
    params: Promise<{ slug: string}>;
} ) {

    const { slug } = await params;
    const prosjekt = projects.find((p) => p.slug === slug)

    return (
        <main>
            <h1>{prosjekt?.title}</h1>
            <p>{prosjekt?.description}</p>
        </main>
    );
}
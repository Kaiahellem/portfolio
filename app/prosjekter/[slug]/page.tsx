import { prosjekter } from "@/app/data";


export default async function ProsjektDetalj({   
    params,
}: {
    params: Promise<{ slug: string}>;
} ) {

    const { slug } = await params;
    const prosjekt = prosjekter.find((p) => p.slug === slug)

    return (
        <main>
            <h1>{prosjekt?.tittel}</h1>
            <p>{prosjekt?.beskrivelse}</p>
        </main>
    );
}
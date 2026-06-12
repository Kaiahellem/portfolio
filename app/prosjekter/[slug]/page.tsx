
export default async function ProsjektDetalj({   
    params,
}: {
    params: Promise<{ slug: string}>;
} ) {

    const { slug } = await params;

    return (
        <main>
            <h1>Et prosjekt</h1>
            <p>Her kommer detaljer om prosjektet</p>
        </main>
    );
}
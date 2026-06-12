import Link from "next/link";

type ProsjektKortProps = {
    slug: string;
    tittel: string;
    beskrivelse: string;
};

export default function ProsjektKort({slug, tittel, beskrivelse}: ProsjektKortProps) {
    return(
        <div className="border border-neutral-200 rounded-lg">
            <Link href={`/prosjekter/${slug}`} className="block border border-neutral-200 rounded-lg p-6 hover:border-neutral-400">
            <h2>{tittel}</h2>
            <p>{beskrivelse}</p>
            </Link>
        </div>
    );
}
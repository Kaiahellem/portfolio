
export type Prosjekt = {
    slug: string;
    tittel: string;
    beskrivelse: string;
};

export const prosjekter: Prosjekt[] = [
    {
        slug: "portefoljenettside",
        tittel: "Porteføljenettside",
        beskrivelse: "Min egen porteføljeside bygget med Next.js og Typescript.",
    },
    {
        slug: "ute",
        tittel: "Ute",
        beskrivelse: "App for å enkelt finne restauranter og uteliv."
    },
];
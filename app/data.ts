
export type Project = {
    slug: string;
    title: string;
    description: string;
};

export const projects: Project[] = [
    {
        slug: "portefoljenettside",
        title: "Porteføljenettside",
        description: "Min egen porteføljeside bygget med Next.js og Typescript.",
    },
    {
        slug: "ute",
        title: "Ute",
        description: "App for å enkelt finne restauranter og uteliv."
    },
];
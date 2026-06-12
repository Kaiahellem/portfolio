import ProsjektKort from "../components/ProsjektKort";

type Prosjekt = {
    tittel: string;
    beskrivelse: string;
};

const prosjekter: Prosjekt [] = [
    {
    tittel: "Porteføljenettside",
    beskrivelse: "Min egen porteføljeside bygget med Next.js og Typescript.",
    },
    {
        tittel: "Ute",
        beskrivelse: "App for å enkelt finne restauranter og uteliv."
    }
];

export default function Prosjekter() {
    
    return (
        <main>
            <h1>Prosjekter</h1>
            <div className="flex flex-col gap-4 mt-6">
            {prosjekter.map((prosjekt) => (
                <ProsjektKort 
                key={prosjekt.tittel}
                tittel={prosjekt.tittel}
                beskrivelse={prosjekt.beskrivelse}
                />
                    ))}
                    </div>
        </main>
    );

}
import ProsjektKort from "../components/ProsjektKort";
import { prosjekter } from "../data";

export default function Prosjekter() {
    
    return (
        <main>
            <h1>Prosjekter</h1>
            <div className="flex flex-col gap-4 mt-6">
            {prosjekter.map((prosjekt) => (
                <ProsjektKort 
                key={prosjekt.tittel}
                slug={prosjekt.slug}
                tittel={prosjekt.tittel}
                beskrivelse={prosjekt.beskrivelse}
                />
                    ))}
                    </div>
        </main>
    );

}
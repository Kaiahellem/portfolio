import PageLayout from "../components/PageLayout";

export default function About() {
return (
    <PageLayout title={<h1>Om meg</h1>}>
        <p>Hei!</p>
        <p>Jeg er Kaia, en utvikler med sans for å både bygge ting som funker og ser bra ut.</p>
        <p>Jeg jobber mest med moderne webteknologi. 
            Next.js og Typescript er verktøyene jeg bruker for tiden. 
            Jeg liker å forstå hvordan ting fungerer under panseret, ikke bare få det til å virke.</p>
        <p>Jeg elsker å utforske skjæringspunktet mellom design, teknologi og AI.</p>
        <div>KAIA HELLEM</div>
    </PageLayout>
);
}
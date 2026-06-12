
type ProskjeKortProps = {
    tittel: string;
    beskrivelse: string;
};

export default function ProsjektKort({tittel, beskrivelse}: ProskjeKortProps) {
    return(
        <div>
            <h2>{tittel}</h2>
            <p>{beskrivelse}</p>
        </div>
    );
}
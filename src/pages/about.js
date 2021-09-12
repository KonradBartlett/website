import { ScavengerButton } from "../components/scavenger";

export function About() {
    document.title = "About - Konrad Bartlett"
    return (
        <div className="page">
            <ScavengerButton colour="rainbow" index="0" mode="bounce"/>
            <h2>test</h2>
        </div>
    );
}
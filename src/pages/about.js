import { RandomFact } from "../components/randomFact";
import { ScavengerButton } from "../components/scavenger";
import './about.scss';

export function About() {
    document.title = "About - Konrad Bartlett"
    return (
        <div className="page">
            <ScavengerButton colour="rainbow" index="0" mode="bounce"/>
            <div className="card about">
                <h2>About Me</h2>
                <RandomFact />

            </div>
        </div>
    );
}
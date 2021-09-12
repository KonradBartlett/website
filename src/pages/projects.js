import { ScavengerButton } from "../components/scavenger";

export function Projects() {
    document.title = "Projects - Konrad Bartlett"
    return (
        <div className="page">
            <ScavengerButton index="3" colour="rainbow" mode="fade" />
            <h2>Projects</h2>
            <div className="card">
                Coming soon
            </div>
        </div>
        
    );
}
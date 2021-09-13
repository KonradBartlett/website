import { ScavengerButton } from "../components/scavenger";
import './projects.scss';

export function Projects() {
    document.title = "Projects - Konrad Bartlett"
    return (
        <div className="page">
            <ScavengerButton index="3" colour="rainbow" mode="fade" />
            <div className="card projects">
                <h2>Projects</h2>
                Coming soon
            </div>
        </div>
        
    );
}
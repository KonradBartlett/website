import { ScavengerButton } from "../components/scavenger";
import './projects.scss';
import { Reviews } from "./projects/reviews";

export function Projects() {
    document.title = "Projects - Konrad Bartlett"
    return (
        <div className="page">
            <ScavengerButton index="3" colour="rainbow" mode="fade" />
            <div className="card projects">
                <h1>Projects</h1>
                Coming soon
                {/* <details>
                    <summary><h3>Game Reviews</h3></summary>
                    I like to review videogames!
                    <Reviews/>
                </details> */}
            </div>
        </div>
        
    );
}
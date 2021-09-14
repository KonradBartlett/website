import { Links } from "../components/footer";
import { ScavengerButton } from "../components/scavenger";

export function Home() {
    document.title = "Home - Konrad Bartlett"
    return (
        <div className="page ">
            <ScavengerButton  index="1" mode="bounce"/>
            <header className="header">
                <h1>Konrad Bartlett<br/>Web Developer</h1>
                <p>React | Angular | Node.js | Shopify | .NET</p>
                <Links/>
            </header>
        </div>
    );
}
  
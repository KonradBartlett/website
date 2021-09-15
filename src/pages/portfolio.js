import { ScavengerButton } from "../components/scavenger";
import './portfolio.scss';

export function Portfolio() {
    document.title = "Portfolio - Konrad Bartlett"
    return (
        <div className="page">
        <ScavengerButton index="3" colour="rainbow" mode="fade" />
            <div className="card portfolio">
                <h2>Portfolio</h2>
                <section class="grid">
                    <div class="container">
                        <a href="https://www.lttstore.com/" target="_blank" rel="noreferrer"><div className="cell">
                            <div id="linus" className="image dark_hover" />
                            <h2>LTT Store</h2>
                            <p>
                                LTT Store is a merchandise store for the large YouTube sensation Linus Tech Tips.<br/><br/>
                                LTT Store uses a mix of Preact, Liquid, and Shopify goodness to bring a one of a kind shopping experience to it's users.<br/><br/>
                                During my time working on LTT Store I have implemented new features including checkout widgets, games, complicated discounts not available by default, and a complete store redesign.
                            </p>
                        </div></a>
                    </div>
                    <div class="container">
                        <a href="https://sunshinecoastdog.com/" target="_blank" rel="noreferrer"><div className="cell">
                            <div id="dogs" className="image dark_hover" />
                            <h2>Doggy Daycare</h2>
                            <p>
                                Doggy Daycare is a sample project used to practice my craft.<br/><br/>
                                Doggy Daycare uses React and is hosted on GCP.<br/><br/> 
                            </p>
                        </div></a>
                    </div>
                    <div class="container">
                        <a href="#!"><div className="cell">
                            <div id="" className="image dark_hover" />
                            <h2>Placeholder</h2>
                            <p>
                                A placeholder tile for a future project
                            </p>
                        </div></a>
                    </div>
                    <div class="container">
                        <a href="#!"><div className="cell">
                            <div id="" className="image dark_hover" />
                            <h2>Placeholder</h2>
                            <p>
                                A placeholder tile for a future project
                            </p>
                        </div></a>
                    </div>
                    <div class="container">
                        <a href="#!"><div className="cell">
                            <div id="" className="image dark_hover" />
                            <h2>Placeholder</h2>
                            <p>
                                A placeholder tile for a future project
                            </p>
                        </div></a>
                    </div>
                    <div class="container">
                        <a href="#!"><div className="cell">
                            <div id="" className="image dark_hover" />
                            <h2>Placeholder</h2>
                            <p>
                                A placeholder tile for a future project
                            </p>
                        </div></a>
                    </div>
                </section>
            </div>
        </div>
    );
}
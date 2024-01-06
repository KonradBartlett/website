import { motion } from "framer-motion";
import { ScavengerButton } from "../components/scavenger";
import './portfolio.scss';

export function Portfolio() {
    document.title = "Portfolio - Konrad Bartlett"
    return (
        <motion.div     
            initial={{ 
                x: '-50vw',
                opacity: 0
            }}
            animate={{ 
                x: 100,
                opacity: 1
            }}
            exit={{ 
                y: '100vh',
                opacity: 0
            }}
            transition={{ duration: 0.3 }}
            className="page">
        <ScavengerButton index="3" colour="rainbow" mode="fade" />
            <div className="card portfolio">
                <h2>Portfolio</h2>
                <section class="grid">
                    <div class="container">
                        <a href="https://konradandmaggie.love/" target="_blank" rel="noreferrer"><div className="cell">
                            <div id="wedding" className="image dark_hover" />
                            <h2>Konrad & Maggie Wedding</h2>
                            <p>
                                My fiance and I got married in June 2024! We needed a wedding website and I figured instead of paying a website builder for one, I would design, code, and host one myself.<br/><br/>
                                The website uses Vanilla HTML, CSS, and very little JS in order to avoid over complicating an otherwise very simple site. I focused on using lots of modern CSS to ensure the website is as accessible and visually appealing as possible.                                
                            </p>
                        </div></a>
                    </div>
                    <div class="container">
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
                        <a href="https://old.sunshinecoastdog.com/" target="_blank" rel="noreferrer"><div className="cell">
                            <div id="dogs" className="image dark_hover" />
                            <h2>Doggy Daycare | Draft</h2>
                            <p>
                                Doggy Daycare is a sample project used to practice my craft.<br/><br/>
                                Doggy Daycare uses React and is hosted on GCP. During this project I was focused on creating everything from scratch and making the interface responsive from the start.<br/><br/> 
                                I wasn't a fan of the layout or content so I quickly finished it and started to work on a second version.<br/><br/> 
                                While I used my standard project layout / design pattern while creating this website, I found lots of ways to improve my current workflow and optomise development for the future.
                            </p>
                        </div></a>
                    </div>
                    <div class="container">
                        <a href="https://sunshinecoastdog.com/" target="_blank" rel="noreferrer"><div className="cell">
                            <div id="dogs2" className="image dark_hover" />
                            <h2>Sunshine Coast Dogs</h2>
                            <p>
                                Sunshine Coast Dogs is the 2nd version of the Doggy Daycare site.<br/><br/>
                                Sunshine Coast Dogs still uses React and is hosted on GCP. The goal of this project was to create a website with a focus design first, functionality second.<br/><br/>
                                From the start I was working on making the website look asthetically pleasing and just adding fun features like a custom cursor, and scroll bar that contribute to the visuals of the website but not the layout or content.
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
        </motion.div>
    );
}

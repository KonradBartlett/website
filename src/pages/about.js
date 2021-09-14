import { RandomFact } from "../components/randomFact";
import { ScavengerButton } from "../components/scavenger";
import './about.scss';

export function About() {
    document.title = "About - Konrad Bartlett"
    return (
        <div className="page">
            <ScavengerButton colour="pink" index="0" mode="fade"/>
            <div className="card about">
                <div className="details">
                    <h2>About Me</h2>
                    <p>
                        I am a full time software developer based out of Surrey BC, 
                        with 3 years of professional experience working on enterprise applications, and client facing interfaces. 
                        I tend to work using the hype beast stack of React, Node, Postgres, because I find these technologies to be the most enjoyable to work with. 
                        <br/><br/>
                        While most of my hobbies include sitting in front of a computer, (video games, and coding) I always try to find time during the day to take my bike out and ride for a few hours. 
                        I always seek out the latest and greatest cutting edge technologies and love getting myself deeply invested in learning more about new novel topics. 
                        Lately learning all about AI and data science has been very fun as I listen to as many podcasts and do as many online tutorials as I can. 
                        <br/><br/>
                        I try to enjoy art as much as possible whether it be audio, visual, or any other sort of art. 
                        And I am starting to take steps towards teaching myself the basics of art and illustrations. 
                        I hope to one day make digital picture books using Three.JS and Canvas. 
                        <br/><br/>
                        I do enjoy piña coladas, and getting caught in the rain. 

                        
                    </p>
                </div>
                <RandomFact className="bottom"/>
            </div>
        </div>
    );
}
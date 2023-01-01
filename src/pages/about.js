import { RandomFact } from "../components/randomFact";
import { ScavengerButton } from "../components/scavenger";
import { ReactComponent as Cocktail } from '../assets/cocktail.svg';
import './about.scss';

import { motion } from 'framer-motion';

export function About() {
    document.title = "About - Konrad Bartlett"
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
            <ScavengerButton colour="pink" index="0" mode="fade"/>
            <div className="card about">
                <div className="details">
                    <h2>About Me</h2>
                    <p>
                        I am the full time web developer for <a href="https://www.lttstore.com">LTTStore.com</a>, based out of Surrey BC.
                        Very passionate about bicycles.
                        Cutest bird in the world
                        
//                         I am a full time web developer based out of Surrey BC, 
//                         with 3 years of professional experience working on enterprise applications, and client facing interfaces. 
//                         I tend to work using the hype beast stack of React, Node, and Postgres, because I find these technologies to be the most enjoyable to work with. 
//                         <br/><br/>
//                         While most of my hobbies include sitting in front of a computer, (video games, and coding) I always try to find time during the day to take my bike out and ride for a few hours. 
//                         Seeking out the latest and greatest cutting edge technologies, I love getting myself deeply invested in learning more about new novel topics. 
//                         Lately learning all about AI and data science has been very fun as I listen to as many podcasts and do as many online tutorials as I can. 
//                         <br/><br/>
//                         Experiencing art is very fun, and I try to seek it out as of it much as possible whether it be audio, visual, or any other sort of art. 
//                         I am starting to take steps towards teaching myself the basics of art and illustrations. 
//                         One day I hope to make digital picture books using Three.JS and Canvas. 
//                         <br/><br/>
//                         I do enjoy piña coladas, and getting caught in the rain. <Cocktail/>
                    </p>
                </div>
                <RandomFact className="bottom"/>
            </div>
        </motion.div>
    );
}

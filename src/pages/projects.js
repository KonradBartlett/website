import { motion } from 'framer-motion';
import './projects.scss';

export function Projects() {
    document.title = "Projects - Konrad Bartlett"
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
            <div className="card projects">
                <h1>Projects</h1>
                Coming soon
                {/* <details>
                    <summary><h3>Game Reviews</h3></summary>
                    I like to review videogames!
                    <Reviews/>
                </details> */}
            </div>
        </motion.div>
        
    );
}
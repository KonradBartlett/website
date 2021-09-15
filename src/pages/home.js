import { motion } from "framer-motion";
import { Links } from "../components/footer";
import { ScavengerButton } from "../components/scavenger";

import './home.scss';

export function Home() {
    document.title = "Home - Konrad Bartlett"
    return (
        <motion.div 
            initial={{ 
                y: '-10vh',
                opacity: 0
            }}
            animate={{ 
                y: 0,
                opacity: 1
            }}
            exit={{ 
                y: '100vh',
                opacity: 0
            }}
            transition={{ duration: 0.3 }}
            id="home" className="page ">
            <ScavengerButton  index="1" mode="bounce"/>
            <header className="header">
                <h1>Konrad Bartlett<br/>Web Developer</h1>
                <p>React | Angular | Node.js | Shopify | .NET</p>
                <Links/>
            </header>
        </motion.div>
    );
}
  
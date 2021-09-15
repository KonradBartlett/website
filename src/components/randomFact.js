import { useState } from "react";
import {ReactComponent as Bird} from '../assets/bird.svg'
import {ReactComponent as Dota} from '../assets/dota.svg'
import {ReactComponent as Barbershop} from '../assets/barbershop.svg'
import {ReactComponent as Data} from '../assets/data.svg'
import {ReactComponent as Yeezy} from '../assets/yeezy.svg'
import {ReactComponent as JohnWick} from '../assets/johnwick.svg'
import './randomFact.scss';

const facts = [
    {
        image: <Barbershop/>,
        text: 'I used to be part of an award winning barbershop chorus, we would travel internationally and win competitions at the yearly Barbershop Harmony Winter Conventions'
    },
    {
        image: <Dota/>,
        text: 'I am extremely good at a videogame called Dota 2, I used to be rank #1 in the world with a character named Undying and I have friends who play in massive Dota tournaments for millions of dollars'
    },
    {
        image: <Data/>,
        text: 'During the last year of my undergrad, I was offered the opportunity to take a grad school course in big data and I happily accepted as data analysis and AI is my favourite field of computing'
    },
    {
        image: <Bird/>,
        text: 'I have a beautiful bird named Simon, he is a blue linnie and he is my best friend. He often imitates the sound of a keyboard and mouse, and if you make clicking noises at him he will click back'
    },
    {
        image: <Yeezy/>,
        text: 'I collect and own several designer sneakers. My most expensive pair is a pair of Yeezy Slides that are colour way that is extremely rare and hard to come by'
    },
    {
        image: <JohnWick/>,
        text: 'I am a HUGE fan of Keanu Reeves and especially the John Wick franchise. My online persona and usernames are often somehow related to John Wick, and I own every movie which is special because I don\'t often watch TV'
    },
]

export const RandomFact = () => {
    const [fact, setFact] = useState('');
    const [image, setImage] = useState();
    const [index, setIndex] = useState(0);


    const updateFact = () => {
        if(index + 1 >= facts.length){
            setIndex(0);
        } else {
            setIndex(index + 1);
        }
        setFact(facts[index].text);
        setImage(facts[index].image)
    }

    return (
        <div className="randomFact">
            <div className="innerFact">
                <a className="fact_button dark_hover noselect" href="#!" onClick={updateFact}>Fun fact</a>
                <div className="flex">
                    <p className="fact">{fact}</p>
                </div>
            </div>
            {image}
        </div>
    );
};
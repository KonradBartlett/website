import {ReactComponent as Github} from '../assets/github.svg';
import {ReactComponent as Linkedin} from '../assets/linkedin.svg';
import {ReactComponent as RickRoll} from '../assets/rick.svg';

export const Footer = () => {
    return (
        <div className="footer">
            <Links/>
        </div>
    );
}

export const Links = () => {
    return (
        <div>
            <div className="links">
                <a className="dark_hover" href="https://github.com/konradbartlett" target="_blank" rel="noopener noreferrer nofollow">
                    <Github/>
                </a>
                <a  className="dark_hover"href="https://www.linkedin.com/in/konradbartlett" target="_blank" rel="noopener noreferrer nofollow">
                    <Linkedin/>
                </a>
                <a  className="dark_hover"href="https://youtu.be/dQw4w9WgXcQ" target="_blank" rel="noopener noreferrer nofollow">
                    <RickRoll/>
                </a>
            </div>
            <a className="dark_hover" href="mailto:Konrad.Bartlett@Outlook.com" target="_blank" rel="noopener noreferrer nofollow">Konrad.Bartlett@Outlook.com</a>
        </div>
    )

}
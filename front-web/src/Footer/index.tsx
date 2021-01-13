import './styles.css';
import { ReactComponent as YouTubeIcon } from './youtube.svg';
import { ReactComponent as LinkedinIcon } from './linkedin.svg';
import { ReactComponent as InstagramIcon } from './instagram.svg';


function Footer() {
    return (
        <footer className="main-footer">
            App desenvolvido por Gustavo Bertoni
            <div className="footer-icons">
                <a href="https://www.youtube.com/channel/UCd9NKfDhoCAj2vDpKwpqh0g" target="_new">
                    <YouTubeIcon />
                </a>
                <a href="https://www.linkedin.com/in/gustavo-henrique-bertoni-marques-ba81751a1/" target="_new">
                    <LinkedinIcon />
                </a>
                <a href="https://www.instagram.com/beertoni_/?hl=pt-br">
                    <InstagramIcon />
                </a>

            </div>
        </footer>
    )
}

export default Footer;
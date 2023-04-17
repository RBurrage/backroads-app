import PageLinks from './PageLinks';
import { socialLinks } from "../data";

const Footer = () => {
    return (
        <footer className="section footer">
            <PageLinks parentClass='footer-links' itemClass='footer-link' />
            <ul className="footer-icons">
                {socialLinks.map(({ id, href, icon }) => {
                    return (
                        <li key={id}>
                            <a href={href} target="_blank" className="footer-icon" rel="noreferror"
                            ><i className={icon}></i
                            ></a>
                        </li>
                    )
                })}
            </ul>
            <p className="copyright">
                copyright &copy; Backroads travel tours company
                <span id="date">{new Date().getFullYear()}</span> all rights reserved
            </p>
        </footer>
    )
}

export default Footer
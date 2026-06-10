import { MdOutlineEmail } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import "./Footer.css";

export default function Footer() {
    return (
        <footer className="footer">
            <section className="footer__section">
                <span className="footer__label">Created by</span>
                <p className="footer__text">Miguel Barrera</p>
            </section>

            <section className="footer__section footer__section--center">
                <span className="footer__label">Repos Structure</span>
                <p className="footer__text">
                    A personal reference for repository documentation and
                    project organization.
                </p>
            </section>

            <section className="footer__section footer__section--right">
                <a
                    className="footer__social-link"
                    href="mailto:miguelbarrera.wd@gmail.com"
                    aria-label="Send email to Miguel Barrera"
                >
                    <MdOutlineEmail />
                </a>

                <a
                    className="footer__social-link"
                    href="https://github.com/Entus01"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Visit Miguel Barrera's GitHub profile"
                >
                    <FaGithub />
                </a>

                <a
                    className="footer__social-link"
                    href="https://www.linkedin.com/in/miguel-santiago-barrera-castro-web-dev/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Visit Miguel Barrera's LinkedIn profile"
                >
                    <FaLinkedin />
                </a>
            </section>
        </footer>
    );
}
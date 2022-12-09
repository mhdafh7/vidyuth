import styles from './Footer.module.scss';
import { ImInstagram, ImFacebook2 } from 'react-icons/im';
import Image from 'next/image';

const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.socials}>
                <h4>Follow us on social media</h4>
                <ul>
                    <li>
                        <a
                            href="https://www.instagram.com/vidyuth.techfest/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <ImInstagram size="2rem" />
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://www.facebook.com/Eniac16?mibextid=ZbWKwL"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <ImFacebook2 size="2rem" />
                        </a>
                    </li>
                </ul>
            </div>
            <div className={styles.logo}>
                <Image
                    src="/footer-logo.png"
                    alt="Vidyuth Logo"
                    fill
                />
            </div>
        </div>
    );
};
export default Footer;

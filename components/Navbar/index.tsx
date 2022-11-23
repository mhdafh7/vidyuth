import Image from 'next/image';
import Link from 'next/link'
import styles from './Navbar.module.scss';
const Navbar = () => {
    return (
        <div className={styles.container}>
            <Link href="/">
                <Image
                    src="/vidyuth-logo.png"
                    alt="vidyuth logo"
                    width={32}
                    height={32}
                />
            </Link>
            <ul className={styles.navItems}>
                <Link href="/events"><li>Events</li></Link>
                <Link href="/contact"><li>Contact</li></Link>
                <Link href="/collaborators"><li>Collaborators</li></Link>
            </ul>
            <a href='http://www.rit.ac.in/' target="_blank" rel="noreferrer">
                <Image
                    src="/rit-logo.png"
                    alt="RIT kottayam logo"
                    width={32}
                    height={32}
                />
            </a>
        </div>
    );
};
export default Navbar;

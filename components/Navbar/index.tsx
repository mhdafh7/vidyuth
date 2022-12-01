import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import styles from './Navbar.module.scss';
const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const handleClick = () => {
        setMenuOpen(!menuOpen);
    };
    return (
        <>
            <nav className={styles.container}>
                <Link
                    href="/"
                    className={styles.homeLogo}
                >
                    <Image
                        src="/transparent-v.png"
                        alt="vidyuth logo"
                        width={32}
                        height={32}
                    />
                </Link>
                <ul className={styles.navItems}>
                    <Link href="/events">
                        <li>Events</li>
                    </Link>
                    <Link href="/contact">
                        <li>Contact</li>
                    </Link>
                    <Link href="/collaborators">
                        <li>Collaborators</li>
                    </Link>
                </ul>
                <a
                    href="http://www.rit.ac.in/"
                    target="_blank"
                    rel="noreferrer"
                    className={styles.ritLogo}
                >
                    <Image
                        src="/rit-logo.png"
                        alt="RIT kottayam logo"
                        width={32}
                        height={32}
                    />
                </a>

                {/* Mobile Nav */}
                <button
                    className={styles.mobileNavBtn}
                    onClick={handleClick}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </nav>
            {menuOpen ? (
                <div className={styles.mobileNavOverlay}>
                    {/* <div className={styles.mobileNavContent}> */}
                    <ul>
                        <li>
                            <Link
                                href="/events"
                                className={styles.mobileNavItem}
                                onClick={handleClick}
                            >
                                Event
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/contact"
                                className={styles.mobileNavItem}
                                onClick={handleClick}
                            >
                                Contact
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/collaborators"
                                className={styles.mobileNavItem}
                                onClick={handleClick}
                            >
                                Collaborators
                            </Link>
                        </li>
                    </ul>
                    <button
                        className={styles.closeBtn}
                        onClick={handleClick}
                    >
                        <svg
                            fill="#ffffff"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                        >
                            <path d="M 4.7070312 3.2929688 L 3.2929688 4.7070312 L 10.585938 12 L 3.2929688 19.292969 L 4.7070312 20.707031 L 12 13.414062 L 19.292969 20.707031 L 20.707031 19.292969 L 13.414062 12 L 20.707031 4.7070312 L 19.292969 3.2929688 L 12 10.585938 L 4.7070312 3.2929688 z" />
                        </svg>
                    </button>
                    {/* </div> */}
                </div>
            ) : null}
        </>
    );
};
export default Navbar;

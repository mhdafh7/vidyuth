import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { menuItems } from '../../constants/constants';
import MenuItem from './MenuItem';
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
                    {menuItems.map(({ url, title }) => {
                        return (
                            <Link
                                href={`${url}`}
                                key={url}
                            >
                                <li>{title}</li>
                            </Link>
                        );
                    })}
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
                <motion.button
                    className={styles.mobileNavBtn}
                    onClick={handleClick}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </motion.button>
            </nav>
            {menuOpen ? (
                <motion.div
                    className={styles.mobileNavOverlay}
                    initial={{
                        height: 0,
                    }}
                    animate={{
                        height: '100vh',
                        transformOrigin: 'top',
                    }}
                >
                    <motion.ul transition={{ staggerChildren: 0.08, delayChildren: 0.2 }}>
                        {menuItems.map(({ url, title }) => {
                            return (
                                <MenuItem
                                    key={url}
                                    url={url}
                                    title={title}
                                    handleClick={handleClick}
                                />
                            );
                        })}
                    </motion.ul>
                    <motion.button
                        className={styles.closeBtn}
                        onClick={handleClick}
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                    >
                        <svg
                            fill="#ffffff"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                        >
                            <path d="M 4.7070312 3.2929688 L 3.2929688 4.7070312 L 10.585938 12 L 3.2929688 19.292969 L 4.7070312 20.707031 L 12 13.414062 L 19.292969 20.707031 L 20.707031 19.292969 L 13.414062 12 L 20.707031 4.7070312 L 19.292969 3.2929688 L 12 10.585938 L 4.7070312 3.2929688 z" />
                        </svg>
                    </motion.button>
                </motion.div>
            ) : null}
        </>
    );
};
export default Navbar;

import Link from 'next/link';
import styles from './Hero.module.scss';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <div className={styles.container}>
            <div className={styles.infoContainer}>
                <h3>Dec 16,17</h3>
                <h2>VIDYUTH 22</h2>
                <h3>RIT, Kottayam</h3>
            </div>
            <div className={styles.btnContainer}>
                <Link href="/events">
                    <motion.button
                        className={styles.eventsBtn}
                        whileHover={{
                            scale: 1.05,
                            transition: { duration: 1 },
                        }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                    >
                        Events
                    </motion.button>
                </Link>
                <Link href="/contact">
                    <motion.button
                        className={styles.sponsorsBtn}
                        whileHover={{
                            scale: 1.05,
                            transition: { duration: 0.6 },
                        }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                    >
                        Sponsor
                    </motion.button>
                </Link>
            </div>
        </div>
    );
};
export default Hero;

import { motion } from 'framer-motion';
import Head from 'next/head';
import Image from 'next/image';
import { collaboratorsDetails } from '../../constants/constants';
import styles from './collaborators.module.scss';

let easing = [0.6, -0.05, 0.01, 0.99];

const stagger = {
    animate: {
        transition: {
            staggerChildren: 0.05,
        },
    },
};

const fadeInUp = {
    initial: {
        y: 60,
        opacity: 0,
        transition: { duration: 0.6, ease: easing },
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.6,
            ease: easing,
        },
    },
};

const Collaborators = () => {
    return (
        <>
            <Head>
                <title>Collaborators</title>
                <meta
                    name="description"
                    content="Collaborators of Vidyuth 2022"
                />
                <link
                    rel="icon"
                    href="/favicon.ico"
                />
            </Head>
            <motion.div
                className={styles.container}
                initial="initial"
                animate="animate"
                exit={{ opacity: 0 }}
            >
                <h3>Technical Sponsor</h3>
                <motion.div className={styles.imgContainer}>
                    <motion.div
                        variants={fadeInUp}
                        className={styles.imgWrapper}
                        style={{ scale: 1.5 }}
                    >
                        <Image
                            src="/Schneider_Electric.png"
                            fill
                            alt="Schneider Electric"
                            className={styles.img}
                        />
                    </motion.div>
                </motion.div>
                <h3>Collaborators</h3>
                <motion.div
                    variants={stagger}
                    className={styles.imgContainer}
                >
                    {collaboratorsDetails.map((item) => {
                        return (
                            <motion.div
                                variants={fadeInUp}
                                className={styles.imgWrapper}
                                key={item.id}
                            >
                                <Image
                                    src={item.img}
                                    fill
                                    alt={item.name}
                                    className={styles.img}
                                />
                            </motion.div>
                        );
                    })}
                </motion.div>
            </motion.div>
        </>
    );
};
export default Collaborators;

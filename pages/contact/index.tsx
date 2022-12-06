import styles from './contact.module.scss';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { contactDetails } from '../../constants/constants';

type ContactProps = {
    name: string;
    phone: number;
    mail: string;
};
let easing = [0.6, -0.05, 0.01, 0.99];

const stagger = {
    animate: {
        transition: {
            staggerChildren: 0.13,
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

const Contact = () => {
    const Card = ({ name, phone, mail }: ContactProps) => {
        return (
            <motion.div
                drag
                dragConstraints={{ top: -0, left: -0, right: 0, bottom: 0 }}
                variants={fadeInUp}
                className={styles.cardContainer}
            >
                <div className={styles.name}>{name}</div>
                <div className={styles.details}>
                    <a href={`tel:${phone}`}>
                        <div className={styles.phone}>+91 {phone}</div>
                    </a>
                    <a href={`mailto:${mail}`}>
                        <div className={styles.mail}>{mail}</div>
                    </a>
                </div>
            </motion.div>
        );
    };

    return (
        <>
            <Head>
                <title>Contact Us</title>
                <meta
                    name="description"
                    content="Contact Details of Coordinators of Vidyuth 2022"
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
                <h3>Contact Us</h3>
                <h5>Reach out to us regarding any queries</h5>
                <motion.div
                    className={styles.cardWrapper}
                    variants={stagger}
                >
                    {contactDetails.map(({ id, name, phone, mail }) => {
                        return (
                            <Card
                                key={id}
                                name={name}
                                phone={phone}
                                mail={mail}
                            />
                        );
                    })}
                </motion.div>
            </motion.div>
        </>
    );
};
export default Contact;

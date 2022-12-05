import styles from './contact.module.scss';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { contactDetails } from '../../constants/constants';
import { useRef } from 'react';

type ContactProps = {
    name: string;
    phone: number;
    mail: string;
};
const Contact = () => {
    // const constraintsRef = useRef(null);
    const Card = ({ name, phone, mail }: ContactProps) => {
        return (
            <motion.div
                // drag
                // dragConstraints={constraintsRef}
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
                // ref={constraintsRef}
                className={styles.container}
            >
                <h3>Contact Us</h3>
                <h5>Reach out to us regarding any queries</h5>
                <div className={styles.cardWrapper}>
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
                </div>
            </motion.div>
        </>
    );
};
export default Contact;

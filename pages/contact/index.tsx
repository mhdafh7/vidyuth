import styles from './contact.module.scss';
import Head from 'next/head';
import { contactDetails } from '../../constants/constants';

type ContactProps = {
    name: string;
    phone: number;
    mail: string;
};
const Contact = () => {
    const Card = ({ name, phone, mail }: ContactProps) => {
        return (
            <div className={styles.cardContainer}>
                <div className={styles.name}>{name}</div>
                <div className={styles.details}>
                    <div className={styles.phone}>+91 {phone}</div>
                    <div className={styles.mail}>{mail}</div>
                </div>
            </div>
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
            <div className={styles.container}>
                <h3>Contact Us</h3>
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
            </div>
        </>
    );
};
export default Contact;

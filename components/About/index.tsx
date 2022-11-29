import Image from 'next/image';
import styles from './About.module.scss';

const About = () => {
    return (
        <div className={styles.container}>
            <div className={styles.aboutLogo}>
                <Image
                    src="/transparent-v.png"
                    alt="Vidyuth logo"
                    className={styles.img}
                    // width={400}
                    // height={400}
                    fill
                    // placeholder="blur"
                />
            </div>
            <p>
                <span>Vidyuth</span> is the annual technical fest of the
                Electrical and Electronics Department, RIT Kottayam with a
                footfall of more than 20,000 and an outreach to more than 50
                colleges. It is a core campaign unifying each EEEian to focus
                their gaze on progress, invention and technology. It features an
                impressive line-up of sci-tech events including Lectures,
                Workshops, Exhibitions and Competitions.
            </p>
        </div>
    );
};
export default About;

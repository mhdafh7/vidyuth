import styles from './Hero.module.scss';
import { useState } from 'react';

const Hero = () => {
    type dateProps = {
        days: number;
        hours: number;
        minutes: number;
        seconds: number;
    };
    const [stuff, setStuff] = useState<dateProps>({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    const d: any = new Date(2022, 11, 16, 10, 0, 0, 0);
    setInterval(() => {
        let noice = new Date(d - Date.now());
        setStuff({
            days: noice.getDate(),
            hours: noice.getHours(),
            minutes: noice.getMinutes(),
            seconds: noice.getSeconds(),
        });
    }, 1000);

    const padZero = (n: number) => n.toString().padStart(2, '0');
    return (
        <div className={styles.container}>
            <div className={styles.counterContainer}>
                <span className={styles.days}>{padZero(stuff.days)}</span>:
                <span className={styles.hours}>{padZero(stuff.hours)}</span>:
                <span className={styles.minutes}>{padZero(stuff.minutes)}</span>:
                <span className={styles.seconds}>{padZero(stuff.seconds)}</span>
            </div>
        </div>
    );
};
export default Hero;

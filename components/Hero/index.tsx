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
        // console.log(stuff);
    }, 1000);

    return (
        <div className={styles.container}>
            <div className={styles.counterContainer}>
                <span className={styles.days}>{stuff.days}</span>:
                <span className={styles.hours}>{stuff.hours}</span>:
                <span className={styles.minutes}>{stuff.minutes}</span>:
                <span className={styles.seconds}>{stuff.seconds}</span>
            </div>
        </div>
    );
};
export default Hero;

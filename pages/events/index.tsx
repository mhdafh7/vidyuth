import styles from './events.module.scss';
import { dayOneEvents, dayTwoEvents } from '../../constants/constants';
import Head from 'next/head';

const Events = () => {
    type EventProps = {
        id: number;
        title: string;
        time: string;
        description: string;
    };
    const Card = ({ id, title, time, description }: EventProps) => {
        return (
            <div
                className={styles.card}
                key={id}
            >
                <span className={styles.title}>{title}</span>
                <span className={styles.time}>{time}</span>
                <span className={styles.description}>{description}</span>
            </div>
        );
    };

    return (
        <>
            <Head>
                <title>Events</title>
                <meta
                    name="description"
                    content="Events on Vidyuth 2022 Day 1 & 2"
                />
                <link
                    rel="icon"
                    href="/favicon.ico"
                />
            </Head>
            <div className={styles.container}>
                <h3>Events</h3>
                <h4 className={styles.dayTitle}>Day One - 16th Dec</h4>
                <div className={styles.cardsContainer}>
                    {dayOneEvents.map(({ id, title, time, description }) => {
                        return (
                            <Card
                                key={id}
                                id={id}
                                title={title}
                                time={time}
                                description={description}
                            />
                        );
                    })}
                </div>
                <h4 className={styles.dayTitle}>Day Two - 17th Dec</h4>
                <div className={styles.cardsContainer}>
                    {dayTwoEvents.map(({ id, title, time, description }) => {
                        return (
                            <Card
                                key={id}
                                id={id}
                                title={title}
                                time={time}
                                description={description}
                            />
                        );
                    })}
                </div>
            </div>
        </>
    );
};
export default Events;

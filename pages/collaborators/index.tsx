import Head from 'next/head';
import Image from 'next/image';
import { collaboratorsDetails } from '../../constants/constants';
import styles from './collaborators.module.scss';

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
            <div className={styles.container}>
                <h3>Collaborators</h3>
                <div className={styles.imgContainer}>
                    {collaboratorsDetails.map((item) => {
                        return (
                            <div
                                className={styles.imgWrapper}
                                key={item.id}
                            >
                                <Image
                                    src={item.img}
                                    fill
                                    alt={item.name}
                                    className={styles.img}
                                />
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
};
export default Collaborators;

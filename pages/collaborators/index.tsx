import Image from 'next/image';
import { collaboratorsDetails } from '../../constants/constants';
import styles from './collaborators.module.scss';

const Collaborators = () => {
    return (
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
    );
};
export default Collaborators;

import { motion } from 'framer-motion';
import Link from 'next/link';
import styles from './Navbar.module.scss';

// Menu Item
type MenuItemType = {
    url: string;
    title: string;
    handleClick: VoidFunction;
};

const MenuItem = ({ url, title, handleClick }: MenuItemType) => {
    return (
        <motion.li
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 400, damping: 17 }}
            initial={{
                opacity: 0,
                y: 50,
            }}
            animate={{
                opacity: 1,
                y: 0,
            }}
        >
            <Link
                href={`/${url}`}
                className={styles.mobileNavItem}
                onClick={handleClick}
            >
                {title}
            </Link>
        </motion.li>
    );
};
export default MenuItem;

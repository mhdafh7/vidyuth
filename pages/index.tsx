import { motion } from 'framer-motion';
import Head from 'next/head';
import React from 'react';
import About from '../components/About';
import Hero from '../components/Hero';
import styles from '../styles/Home.module.scss';


const stagger = {
    animate: {
        transition: {
            staggerChildren: 0.1,
        },
    },
};

export default function Home() {
    return (
        <motion.div
            className={styles.container}
            initial="initial"
            animate="animate"
            exit={{ opacity: 0 }}
        >
            <Head>
                <title>Vidyuth - Explore-Create-Inspire</title>
                <meta
                    name="description"
                    content="Techfest conducted by Electrical department of RIT Kottayam"
                />
                <link
                    rel="icon"
                    href="/favicon.ico"
                />
            </Head>

            <Hero />
            <About />
        </motion.div>
    );
}

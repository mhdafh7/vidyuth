import Head from 'next/head';
import Image from 'next/image';
import React from 'react';
import Hero from '../components/Hero';
import styles from '../styles/Home.module.scss';

export default function Home() {
    return (
        <div className={styles.container}>
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

            <main className={styles.main}>
                <Hero />
            </main>
        </div>
    );
}

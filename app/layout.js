/* eslint-disable react/prop-types */
// 'use client';

import styles from './styles/layout.module.css';
import Footer from './footer/page';
import Header from './header/page';

export default function Layout({ children }) {
    return (
        <div className={styles.container}>
            <Header />

            <main className={styles.main}>{children}</main>

            <Footer />
        </div>
    );
}

/* eslint-disable react/prop-types */

import styles from './styles/layout.module.css';

import Footer from './footer/page';

import Header from './header/page';

export default function Layout({ children }) {
    return (
        <html lang="en">
            <body className={styles.className}>
                <Header />

                <main className={styles.main}>{children}</main>

                <Footer />
            </body>
        </html>
    );
}

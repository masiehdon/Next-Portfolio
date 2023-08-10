import Link from 'next/link'
import styles from "../styles/header.module.css";

export default function Header() {
  return (
    <div className={styles.headerContainer} style={{ zIndex: 1 }}>
      <h2 className={styles.header}>Thats Me</h2>
      <nav className={styles.nav}>
        <ul className={styles.ul}>
          <li>
            <Link
              className={`${styles.link}`}
              href="/landing"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className={`${styles.link}`}
              href="/about"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              className={`${styles.link}`}
              href="/projects"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              className={`${styles.link}`}
              href="/contact"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

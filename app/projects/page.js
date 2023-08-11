import Link from 'next/link';
import styles from '../styles/projects.module.css';
import Image from 'next/image';
import dice from '../../public/dice-img.png';
import blog from '../../public/blog-img.png';
import trendy from '../../public/trendy-img.png';
import weather from '../../public/weather-img.png';

export default function Projects() {
   
    return (
        <div className="body">
            <div className={styles.project}>
                <h3 className={styles.h3}>Blog</h3>
                <Image src={blog} width={200} height={200} alt="blog" />

                <p className={styles.p}>
                    A blog created with Next.js and supabase
                </p>
                <Link
                    className={styles.a}
                    href="https://my-blog-psi-kohl-71.vercel.app/"
                    target="_blank"
                >
                    Check it out!
                </Link>
            </div>

            <div className={styles.project}>
                <h3 className={styles.h3}>Dice Game</h3>
                <Image
                    src={dice}
                    width={200}
                    height={200}
                    alt="Picture of a dice"
                />
                <p className={styles.p}>
                    Check out the my Dice Game and play with a friend.
                </p>
                <Link
                    className={styles.a}
                    href="https://masiehdon.github.io/Dice-Game/"
                    target="_blank"
                >
                    Take me to the game!
                </Link>
            </div>

            <div className={styles.project}>
                <h3 className={styles.h3}>Trendy Treasures</h3>
                <Image
                    src={trendy}
                    width={200}
                    height={200}
                    alt="trendy treasure"
                />

                <p className={styles.p}>A webshop created with an API.</p>
                <Link
                    className={styles.a}
                    href="https://masiehdon.github.io/Trendy-Treasures/"
                    target="_blank"
                >
                    Lets find a treasure!
                </Link>
            </div>

            <div className={styles.project}>
                <h3 className={styles.h3}>WeatherApp</h3>
                <Image
                    src={weather}
                    width={200}
                    height={200}
                    alt="weather app"
                />

                <p className={styles.p}>
                    A simple app to check the weather. You will get the current
                    temprature as well as the lowest and highest ones.
                </p>
                <Link
                    className={styles.a}
                    href="https://masiehdon.github.io/WeatherApp/"
                    target="_blank"
                >
                    Check the weather!
                </Link>
            </div>
        </div>
    );
}

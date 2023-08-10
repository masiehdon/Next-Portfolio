import Link from "next/link"
import styles from "../styles/projects.module.css"

export default function Projects() {
    return (
      <div className="body">
        <div className={styles.project}>
        
            <h3 className={styles.h3}>WeatherApp</h3>

            <p className={styles.p}>
              A simple app to check the weather. You will get the current
              temprature as well as the lowest and highest ones.
            </p>
            <Link className={styles.a}
            href="https://masiehdon.github.io/WeatherApp/" target="_blank"
              >Let me check if its raining!</Link>
              </div>

               <div className={styles.project}>
            <h3 className={styles.h3}>Trendy Treasures</h3>

            <p className={styles.p}>A webshop created with an API.</p>
            <Link className={styles.a}
              href="https://masiehdon.github.io/Trendy-Treasures/"
              target="_blank"
              >Lets find a treasure!</Link>
           
          </div>
          <div className={styles.project}>
            <h3 className={styles.h3}>Dice Game</h3>

            <p className={styles.p}>Check out the my Dice Game and play with a friend.</p>
            <Link className={styles.a}
            href="https://masiehdon.github.io/Dice-Game/" target="_blank"
              >Take me to the game!</Link>
                         
        </div>

        <div className={styles.project}>
            <h3 className={styles.h3}>Dice Game</h3>

            <p className={styles.p}>Need to buy something?</p>
            <Link className={styles.a}
            href="https://assignment4-vite-react.vercel.app/" target="_blank"
              >Take me to the Shop!</Link>
                         
        </div>

        <div className={styles.project}>
            <h3 className={styles.h3}>Assignment 1</h3>

            <p className={styles.p}>Assignment 1</p>
            <Link className={styles.a}
            href="https://github.com/masiehdon/Assignment1-React/settings/pages?classId=627619be-4153-4f6e-9a8f-4c2faf497f1d&assignmentId=1e82dd8c-d7b4-4962-b7f2-71fdc997cfc7&submissionId=e81f13d7-1197-4758-70cb-bd2d5be36ded" target="_blank"
              >Lets go!</Link>
                         
        </div>

         <div className={styles.project}>
            <h3 className={styles.h3}>Assignment 1</h3>

            <p className={styles.p}>Assignment 1</p>
            <Link className={styles.a}
            href="https://github.com/masiehdon/Assignment1-React/settings/pages?classId=627619be-4153-4f6e-9a8f-4c2faf497f1d&assignmentId=1e82dd8c-d7b4-4962-b7f2-71fdc997cfc7&submissionId=e81f13d7-1197-4758-70cb-bd2d5be36ded" target="_blank"
              >Lets go!</Link>
                         
        </div>
        
        </div>
    )
}
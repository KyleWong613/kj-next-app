import Image from 'next/image';
import styles from 'src/styles/Home.module.css';
import Link from "next/link";


export default function Home() {
  return (
    
    <div className={styles.container}>
      <main className={styles.main}>
        <h4 className={styles.title}>
          My <a href="https://nextjs.org">Next.js</a> Application
        </h4>

        <p className={styles.description}>
        </p>

        <div className={styles.grid}>
          <Link className={styles.card} href="/about"><h2>About Me</h2>
           <br/>
            <p>Go to this page to learn more about me</p>
          </Link>
           
          <Link className={styles.card} href="/experiences"><h2>My Experiences</h2>
            <br/>
            <p>Go to this page to learn about my Experiences</p>
          </Link>


          <Link className={styles.card} href="/movies"><h2>My Experiences</h2>
            <br/>
            <p>Go to this page to see the latest Movie Lists</p>
          </Link>
          
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>
          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>
          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}>
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>
        </div>
      </main>






      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer">
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
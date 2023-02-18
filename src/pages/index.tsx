import Head from 'next/head'
import Wordle from '@/wordle'
import styles from '@/styles/Home.module.css'
import words from '@/wordle/words.json';

const getWord = () => {
  return words[Math.floor(Math.random() * words.length)];
};

export default function Page() {

  return (
    <>
      <Head>
        <title>Wordle Clone</title>
        <meta name="description" content="Just another wordle implementation" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Wordle getSolution={getWord} maxTries={5} />
      </main>
    </>
  )
}

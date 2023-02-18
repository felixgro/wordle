import Head from 'next/head'
import Wordle from '@/wordle'
import styles from '@/styles/Home.module.css'
import words from '@/wordle/words.json';

export default function Page({ word, wordList }: { word: string, wordList: string[] }) {

  const getWord = () => {
    return wordList[Math.floor(Math.random() * wordList.length)];
  };

  return (
    <>
      <Head>
        <title>Wordle Clone</title>
        <meta name="description" content="Just another wordle implementation" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Wordle word={word} getSolution={getWord} maxTries={5} />
      </main>
    </>
  )
}

export async function getStaticProps() {
  return {
    props: {
      word: words[Math.floor(Math.random() * words.length)],
      wordList: words
    }
  }
}

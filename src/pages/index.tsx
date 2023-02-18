import Head from 'next/head'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Page() {
  return (
    <>
      <Head>
        <title>Wordle</title>
        <meta name="description" content="Just another wordle implementation" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={inter.className}>Hello Wordle..</h1>
      </main>
    </>
  )
}

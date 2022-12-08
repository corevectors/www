import Head from 'next/head'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'

export default function Home() {
  return (
    <>
      <Head>
        <title>Core Vectors - Developers of Calm Technologies</title>
        <meta
          name="description"
          content="Developers of calm technologies. We help people spend time together with awareness, integrity and love."
        />
      </Head>
      <Header />
      <main>
        <Hero />
      </main>
      <Footer />
    </>
  )
}

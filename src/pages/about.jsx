import Head from 'next/head'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { About } from '@/components/About'
import { Team } from '@/components/Team'

export default function Home() {
  return (
    <>
      <Head>
        <title>Core Vectors - About</title>
        <meta
          name="description"
          content="Developers of calm technologies. We help people spend time together with awareness, integrity and love."
        />
      </Head>
      <Header />
      <main>
        <About />
      </main>
      <Footer />
    </>
  )
}

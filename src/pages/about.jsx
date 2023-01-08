import Head from 'next/head'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { About } from '@/components/About'

export default function Home() {
  return (
    <>
      <Head>
        <title>calm.codes - About Us</title>
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

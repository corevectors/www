import Head from 'next/head'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Products } from '@/components/Products'

export default function Home() {
  return (
    <>
      <Head>
        <title>calm.codes - Our Products</title>
        <meta
          name="description"
          content="Developers of calm technologies. We help people spend time together with awareness, integrity and love."
        />
      </Head>
      <Header />
      <main>
        <Products />
      </main>
      <Footer />
    </>
  )
}

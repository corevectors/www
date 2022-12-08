import Head from 'next/head'
import Script from 'next/script'

import {Footer} from '@/components/Footer'
import {Header} from '@/components/Header'

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
      <Header/>
      <main>
        <iframe
          data-tally-src="https://tally.so/embed/3EqBB4?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
          width="100%" height="747" frameBorder="0" marginHeight="0"
          marginWidth="0"
          title="Contact"></iframe>
        <Script>{`
          var d=document,w="https://tally.so/widgets/embed.js",v=function(){"undefined" != typeof Tally ? Tally.loadEmbeds() : d.querySelectorAll("iframe[data-tally-src]:not([src])").forEach((function (e) {
            e.src = e.dataset.tallySrc
          }))};if(d.querySelector('script[src="'+w+'"]'))v();else{var s=d.createElement("script");s.src=w,s.onload=v,s.onerror=v,d.body.appendChild(s);}
        `}
        </Script>
      </main>
      <Footer/>
    </>
  )
}

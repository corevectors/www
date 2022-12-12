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
        <div className="bg-white">
          <div className="relative sm:py-16">
            <div aria-hidden="true" className="hidden sm:block">
              <div
                className="absolute inset-y-0 left-0 w-1/2 rounded-r-3xl bg-gray-50"/>
              <svg className="absolute top-8 left-1/2 ml-3" width="404"
                   height="392"
                   fill="none" viewBox="0 0 404 392">
                <defs>
                  <pattern id="8228f071-bcee-4ec8-905a-2a059a2cc4fb" x="0" y="0"
                           width="20" height="20" patternUnits="userSpaceOnUse">
                    <rect x="0" y="0" width="4" height="4"
                          className="text-gray-200"
                          fill="currentColor"/>
                  </pattern>
                </defs>
                <rect width="404" height="392"
                      fill="url(#8228f071-bcee-4ec8-905a-2a059a2cc4fb)"/>
              </svg>
            </div>
            <span
              className="relative mb-4 block text-center text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl xl:text-5xl">
              We&apos;d ❤️ to hear from you.
            </span>
            <div
              className="mx-auto px-4 sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8 flex flex-row justify-center items-center">
              <div
                className="relative w-screen md:w-3/4 lg:w-1/2 overflow-hidden rounded-2xl px-6 py-10 shadow-xl sm:px-12 bg-white">
                <div aria-hidden="true"
                     className="absolute inset-0 -mt-72 sm:-mt-32 md:mt-0">
                  <svg className="absolute inset-0 h-full w-full"
                       preserveAspectRatio="xMidYMid slice"
                       xmlns="http://www.w3.org/2000/svg" fill="none"
                       viewBox="0 0 1463 360">
                    <path className="text-indigo-500 text-opacity-40"
                          fill="currentColor"
                          d="M-82.673 72l1761.849 472.086-134.327 501.315-1761.85-472.086z"/>
                    <path className="text-indigo-700 text-opacity-40"
                          fill="currentColor"
                          d="M-217.088 544.086L1544.761 72l134.327 501.316-1761.849 472.086z"/>
                  </svg>
                </div>
                <div className="relative">
                  <iframe
                    data-tally-src="https://tally.so/embed/3EqBB4?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
                    width="100%" height="747" frameBorder="0" marginHeight="0"
                    marginWidth="0"
                    title="Contact"></iframe>
                  <Script id="contact-form">{`
          var d=document,w="https://tally.so/widgets/embed.js",v=function(){"undefined" != typeof Tally ? Tally.loadEmbeds() : d.querySelectorAll("iframe[data-tally-src]:not([src])").forEach((function (e) {
            e.src = e.dataset.tallySrc
          }))};if(d.querySelector('script[src="'+w+'"]'))v();else{var s=d.createElement("script");s.src=w,s.onload=v,s.onerror=v,d.body.appendChild(s);}
        `}
                  </Script>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer/>
    </>
  )
}

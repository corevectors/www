import Image from 'next/image'

import logo from '@/images/logos/clearday.png'

export function Products() {
  return (<div className="bg-white">
      <div className="relative sm:py-16">
        <div aria-hidden="true" className="hidden sm:block">
          <div
            className="absolute inset-y-0 left-0 w-1/2 rounded-r-3xl bg-gray-50"/>
          <svg className="absolute top-8 left-1/2 -ml-3" width="404"
               height="392"
               fill="none" viewBox="0 0 404 392">
            <defs>
              <pattern id="8228f071-bcee-4ec8-905a-2a059a2cc4fb" x="0" y="0"
                       width="20" height="20" patternUnits="userSpaceOnUse">
                <rect x="0" y="0" width="4" height="4" className="text-gray-200"
                      fill="currentColor"/>
              </pattern>
            </defs>
            <rect width="404" height="392"
                  fill="url(#8228f071-bcee-4ec8-905a-2a059a2cc4fb)"/>
          </svg>
        </div>
        <div
          className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
          <div
            className="relative overflow-hidden rounded-2xl bg-indigo-600 px-6 py-10 shadow-xl sm:px-12 sm:py-20">
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
              <div>
                <span
                  className="flex flex-col justify-center items-center mx-auto mt-6 text-lg text-indigo-200 max-w-lg">
                <h1>
                  <span className="mt-2 block text-center text-3xl font-bold leading-8 tracking-tight text-white-900 sm:text-4xl">
                    ✨playdate.irl.rsvp✨
                  </span>
                </h1>
                  <p className="mt-6">
                    We are developing a private social network for
                    parents of children ages 0-12, to help them have more
                    play dates.
                  </p>
                  <p className="mt-6">
                    To learn more and get early access, please leave your email here.
                  </p>
                </span>
              </div>
              <form name="inviteList"
                    method="POST"
                    className="mt-12 sm:mx-auto sm:flex sm:max-w-lg"
                    data-netlify="true">
                <input type="hidden" name="form-name" value="inviteList"/>
                <div className="min-w-0 flex-1">
                  <label htmlFor="cta-email" className="sr-only">Email
                    address</label>
                  <input id="cta-email" type="email" name="email"
                         className="block w-full rounded-md border border-transparent px-5 py-3 text-base text-gray-900 placeholder-gray-500 shadow-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-600"
                         placeholder="Enter your email"/>
                </div>
                <div className="mt-4 sm:mt-0 sm:ml-3">
                  <button type="submit"
                          className="block w-full rounded-md border border-transparent bg-indigo-500 px-5 py-3 text-base font-medium text-white shadow hover:bg-indigo-400 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-600 sm:px-10">
                    Request Early Access
                  </button>
                </div>
              </form>
              <div className="text-indigo-200 text-sm mt-2 sm:mx-auto sm:flex sm:max-w-lg">
                By requesting early access you agree to receive email from irl.rsvp.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>)
}

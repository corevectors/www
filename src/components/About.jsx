import {NavLink} from "@/components/NavLink";

export function About() {
  return (
    <div className="relative overflow-hidden bg-white py-16">
      <div
        className="hidden lg:absolute lg:inset-y-0 lg:block lg:h-full lg:w-full lg:[overflow-anchor:none]">
        <div className="relative mx-auto h-full max-w-prose text-lg"
             aria-hidden="true">
          <svg className="absolute top-12 left-full translate-x-32 transform"
               width="404" height="384" fill="none" viewBox="0 0 404 384">
            <defs>
              <pattern id="74b3fd99-0a6f-4271-bef2-e80eeafdf357" x="0" y="0"
                       width="20" height="20" patternUnits="userSpaceOnUse">
                <rect x="0" y="0" width="4" height="4" className="text-gray-200"
                      fill="currentColor"/>
              </pattern>
            </defs>
            <rect width="404" height="384"
                  fill="url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)"/>
          </svg>
          <svg
            className="absolute top-1/2 right-full -translate-y-1/2 -translate-x-32 transform"
            width="404" height="384" fill="none" viewBox="0 0 404 384">
            <defs>
              <pattern id="f210dbf6-a58d-4871-961e-36d5016a0f49" x="0" y="0"
                       width="20" height="20" patternUnits="userSpaceOnUse">
                <rect x="0" y="0" width="4" height="4" className="text-gray-200"
                      fill="currentColor"/>
              </pattern>
            </defs>
            <rect width="404" height="384"
                  fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)"/>
          </svg>
        </div>
      </div>
      <div className="relative px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-prose text-lg">
          <h1>
            <span
              className="block text-center text-lg font-semibold text-indigo-600">
              Calm Tech for the Benefit of All
            </span>
            <span
              className="mt-2 block text-center text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">
              More awesome. Less nonsense.
            </span>
          </h1>
          <p className="mt-8 text-xl leading-8 text-gray-500">
            We are a group software industry veterans who{" "}
            <a target="_blank" rel="noreferrer noopener"
               className="underline text-indigo-600 font-medium"
               href={"https://www.linkedin.com/posts/kkurian_ive-been-retired-since-firing-my-last-client-activity-6995795384153362432-hTP5?utm_source=share&utm_medium=member_desktop"}>
              believe
            </a>
            {" "}
            people spending time together with awareness, integrity and love is
            the ultimate positive
            sum game.
          </p>
        </div>
        <div className="prose prose-lg prose-indigo mx-auto mt-6 text-gray-500">
          <p>
            In traditional terms, you can think of us as a business
            committed to building calm products that foster genuine human connection.
          </p>
          <p>
            We {" "}
            <a href="products">
              produce
            </a>
            {" "}
            dependable software systems to help you spend quality
            time together with yourself and others because we see this as a
            benefit to all.
          </p>
          <p>
            We are part of the{" "}
            <a target="_blank" rel="noreferrer noopener"
               href="https://www.antidoteto.tech">antidote to
              tech</a>.
          </p>
          <NavLink href="mailto:hello@corevectors.com">Connect with us
            →</NavLink>
        </div>
      </div>
    </div>

  )
}

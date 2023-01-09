import Image from 'next/image'

import {NavLink} from "@/components/NavLink";

import kerry from '@/images/people/kerry.jpg'
import subbu from '@/images/people/subbu.jpg'
import yana from '@/images/people/yana.jpg'
import you from '@/images/people/you.jpg'

const people = [{
  name: 'Kerry Ivan Kurian',
  role: 'Partner',
  imageUrl: kerry,
  bio: 'Kerry is an awake-aware speck of the universe with a ' +
    'background in entrepreneurship and computer science. This is both as ' +
    'miraculous and ridiculous as it sounds. He hopes to spend ' +
    'time together with you in real life someday soon. 🤘🧘🏽🌞',
  linkedinUrl: 'https://www.linkedin.com/in/kkurian/',
},
  {
    name: 'Subbu Balakrishnan',
    role: 'Partner',
    imageUrl: subbu,
    bio: 'Bio coming soon!',
    linkedinUrl: 'https://www.linkedin.com/in/subbubalakrishnan/',
  },
  {
    name: 'Yana Prokopchuk',
    role: 'Partner',
    imageUrl: yana,
    bio: 'Bio coming soon!',
    linkedinUrl: 'https://www.linkedin.com/in/yana-prokopchuk/',
  },
  {
    name: 'You',
    role: 'Partner',
    imageUrl: you,
    bio: 'That\'s right. You. We would ❤️ to work with you. Please connect with us.',
    linkedinUrl: '#',
  },
]

export function About() {
  return (<div className="relative overflow-hidden bg-white py-16">
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
              calm.codes for the benefit of all
            </span>
            <span
              className="mt-2 block text-center text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">
              🤘🧘🏽🌞
            </span>
          </h1>
          <p className="mt-8 text-xl leading-8 text-gray-500">
            Welcome to calm.codes. We are a <a className="underline text-indigo-600 font-medium" href="#about-us">group</a> of software industry veterans who{" "}
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
            In traditional terms, you can think of us as a business committed to
            building calm products that foster genuine human connection.
          </p>
          <p>
            We
            {" "}
            <a target="_blank" rel="noreferrer noopener" href="https://kerrykurian.com/posts/solstice-and-the-path">
              envision
              </a>
            {" "}
            a world in which people are spending more time together
            with themselves and others in awareness, integrity and love. To that
            end, we are on a mission to deliver private social networks that
            bring people together in real life.
          </p>

          <p>
            Unlike traditional online businesses that pursue endless growth and
            enjoy customer lock-in, we seek to get people offline and into the
            real world. The day we achieve our ultimate success is the day our
            products become superfluous.
          </p>

          <p>
            We are part of the{" "}
            <a target="_blank" rel="noreferrer noopener"
               href="https://www.antidoteto.tech">antidote to
              tech</a>.
          </p>

          <span
            id="about-us"
            className="pt-5 mt-2 block text-center text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">
              Tell Me Who You Are.
            </span>

          <div>
            <ul
              role="list"
              className="pl-0 list-none space-y-12 sm:-mt-8 sm:space-y-0 sm:divide-y sm:divide-gray-200 lg:space-y-0"
            >
              {people.map((person) => (
                <li key={person.name} className="sm:py-8">
                  <div
                    className="space-y-4 sm:grid sm:grid-cols-3 sm:items-start sm:gap-6 sm:space-y-0">
                    <div
                      className="aspect-w-3 aspect-h-2 sm:aspect-w-3 sm:aspect-h-4">
                      <Image
                        className="rounded-lg object-cover shadow-lg"
                        target="_blank" rel="noreferrer noopener"
                        src={person.imageUrl} alt=""/>
                    </div>
                    <div className="sm:col-span-2">
                      <div className="space-y-4">
                        <div
                          className="space-y-1 text-lg font-medium leading-6">
                          <h3>{person.name}</h3>
                          <p className="text-indigo-600">{person.role}</p>
                        </div>
                        <div className="text-lg">
                          <p className="text-gray-500">{person.bio}</p>
                        </div>
                        <ul role="list" className="flex space-x-5 p-0">
                          <li className="list-none p-0">
                            <a href={person.linkedinUrl}
                               className="text-gray-400 hover:text-gray-500">
                              <span className="sr-only">LinkedIn</span>
                              <svg className="h-5 w-5" aria-hidden="true"
                                   fill="currentColor" viewBox="0 0 20 20">
                                <path
                                  fillRule="evenodd"
                                  d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>))}
            </ul>
          </div>

          <NavLink href="contact">Connect with us →</NavLink>
        </div>
      </div>
      ️</div>
  )
}

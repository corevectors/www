import Image from 'next/image'

import { NavLink } from '@/components/NavLink'
import { Container } from '@/components/Container'
import logoLaravel from '@/images/logos/laravel.svg'
import logoMirage from '@/images/logos/mirage.svg'
import logoStatamic from '@/images/logos/statamic.svg'
import logoStaticKit from '@/images/logos/statickit.svg'
import logoTransistor from '@/images/logos/transistor.svg'
import logoTuple from '@/images/logos/tuple.svg'

export function Hero() {
  return (
    <Container className="pt-20 pb-16 text-center lg:pt-32">
      <h1 className="mx-auto max-w-4xl font-display text-5xl font-medium tracking-tight text-slate-900 sm:text-7xl">
        <span className="relative whitespace-nowrap text-blue-600">
          <span className="relative">Calm Tech</span>
        </span>{' '}
        for the benefit of all.
      </h1>
      <p className="mx-auto mt-6 max-w-2xl text-lg tracking-tight text-slate-700">
        We are builders of technology who help people spend time together with awareness, integrity and love.
      </p>
      <div className="mt-10 flex justify-center gap-x-6">
        <NavLink href="/about">Learn more →</NavLink>
        <NavLink href="mailto:hello@corevectors.com">Connect with us →</NavLink>
      </div>
    </Container>
  )
}

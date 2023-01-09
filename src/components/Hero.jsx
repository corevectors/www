import { NavLink } from '@/components/NavLink'
import { Container } from '@/components/Container'

export function Hero() {
  return (
    <Container className="pt-20 pb-16 text-center lg:pt-32">
      <h1 className="mx-auto max-w-4xl font-display text-5xl font-medium tracking-tight text-slate-900 sm:text-7xl">
        <span className="relative whitespace-nowrap text-blue-600">
          <span className="relative">calm.codes</span>
        </span>{' '}
        for the benefit of all.
      </h1>
      <p className="mx-auto mt-6 max-w-2xl text-lg tracking-tight text-slate-700">
        We enable private social networks that bring people together in real life.
      </p>
      <div className="mt-10 flex justify-center gap-x-6">
        <NavLink href="about">Learn more →</NavLink>
        <NavLink href="contact">Connect with us →</NavLink>
      </div>
    </Container>
  )
}

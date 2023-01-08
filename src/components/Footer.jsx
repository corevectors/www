import Link from 'next/link'

import { Container } from '@/components/Container'
import { Logo } from '@/components/Logo'
import { NavLink } from '@/components/NavLink'

export function Footer() {
  return (
    <footer>
      <Container>
        <div className="flex flex-col items-center py-10 sm:flex-row-reverse sm:justify-between">
          <div className="flex gap-x-6">
          </div>
          <p className="mt-6 text-sm text-slate-500 sm:mt-0">
            Copyright &copy; {new Date().getFullYear()} calm.codes LLC
          </p>
        </div>
      </Container>
    </footer>
  )
}

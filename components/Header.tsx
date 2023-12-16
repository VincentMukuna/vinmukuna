'use client'
import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Logo from '@/data/logo.svg'
import Link from './Link'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'
import SearchButton from './SearchButton'
import { usePathname } from 'next/navigation'

const Header = () => {
  const pathname = usePathname()
  return (
    <header className="flex justify-between py-4 ">
      <div>
        <Link href="/" aria-label={siteMetadata.headerTitle}>
          <div className="relative flex items-center justify-between">
            <div className="relative right-7 w-40 scale-75 transform ">
              <Logo />
            </div>
          </div>
        </Link>
      </div>
      <div className="flex items-center space-x-4 leading-5 sm:space-x-6">
        {headerNavLinks
          .filter((link) => link.href !== '/')
          .map((link) => (
            <Link
              key={link.title}
              href={link.href}
              className={`hidden text-lg font-medium hover:scale-105 hover:text-primary-500  ${
                pathname.includes(link.title.toLocaleLowerCase())
                  ? ' text-primary-600 '
                  : 'text-gray-900  dark:text-gray-100'
              } transition sm:block`}
            >
              {link.title}
            </Link>
          ))}
        <SearchButton />
        <ThemeSwitch />
        <MobileNav />
      </div>
    </header>
  )
}

export default Header

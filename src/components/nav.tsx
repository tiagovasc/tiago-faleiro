import { useCallback, useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { FiMenu } from 'react-icons/fi'
import cn from 'classnames'

import TiagoLogo2 from 'assets/images/tiagologo_01.png'
import TiagoLogo from 'assets/images/tiagologo.png'

import ThemeToggleButton from 'components/theme-toggle-button'
import TailwindBreakpoint from 'components/tailwind-breakpoint'

export const signUpLink = 'https://tripetto.app/run/IUA2V0LPS6'

export const links = [
  { name: 'Home', href: '/#hero' },
  { name: 'About', href: '/#about' },
  { name: 'Services', href: '/#services' },
  { name: 'Testimonials', href: '/#testimonials' },
  { name: 'Pricing', href: '/#pricing' }
]

export default function Nav(): JSX.Element {
  const [openNav, setOpenNav] = useState(false)
  const [show, setShow] = useState(true)
  const [y, setY] = useState(window.scrollY)

  const handleNavigation = useCallback(
    e => {
      const window = e.currentTarget

      if (y > window.scrollY) setShow(true)
      else if (y < window.scrollY) {
        setShow(false)
        setOpenNav(false)
      }

      setY(window.scrollY)
    },
    [y]
  )

  useEffect(() => {
    setY(window.scrollY)
    window.addEventListener('scroll', handleNavigation)

    return () => {
      window.removeEventListener('scroll', handleNavigation)
    }
  }, [handleNavigation])

  const handleBreakpointChange = breakpoint => {
    if (!['base', 'sm', 'md'].includes(breakpoint)) return setOpenNav(false)
  }

  return (
    <div
      className={cn(
        'fixed flex w-full justify-center z-10 p-5',
        show ? 'pointer-events-auto' : 'pointer-events-none'
      )}
    >
      <TailwindBreakpoint onChange={handleBreakpointChange} />
      <AnimatePresence mode="wait">
        <motion.nav
          key={show ? 'show' : ''}
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: show ? 1 : 0 }}
          exit={{ y: -20, opacity: 0 }}
          className="flex-1 backdrop-blur-md bg-[#ffffff77] dark:bg-[#11182777] max-w-6xl px-4 md:px-12 py-4 rounded-xl shadow-lg"
        >
          <div className="flex items-center justify-between">
            <div className="h-12">
              <img
                alt="tiago"
                src={TiagoLogo}
                className="hidden dark:block object-cover h-full mx-auto"
              />
              <img
                alt="tiago"
                src={TiagoLogo2}
                className="block dark:hidden object-cover h-full mx-auto"
              />
            </div>
            <div className="hidden md:flex flex-1 max-w-xl items-center justify-between text-gray-500 dark:text-gray-300 gap-6 px-6">
              {links.map(({ name, href }) => (
                <a href={href}>{name}</a>
              ))}
            </div>
            <div className="flex items-center gap-4">
              <ThemeToggleButton />
              <button
                onClick={() => setOpenNav(!openNav)}
                className="flex items-center justify-center md:hidden text-2xl text-gray-100 bg-blue-400 w-11 h-11 p-1 rounded-xl hover:opacity-75"
              >
                <FiMenu />
              </button>
              <a href={signUpLink} className="hidden md:block">
                <button className="text-gray-100 bg-blue-400 px-6 py-2 rounded-full font-bold shadow hover:opacity-75">
                  Sign Up
                </button>
              </a>
            </div>
          </div>
          <AnimatePresence mode="wait">
            <motion.div
              initial={{ height: '0' }}
              animate={{ height: openNav ? 'auto' : '0' }}
              className="overflow-hidden"
            >
              <div className="flex flex-col justify-center overflow-hidden pt-1">
                {links.map(({ name, href }) => (
                  <a onClick={() => setOpenNav(false)} href={href}>
                    <button className="w-full rounded-xl py-2 text-lg text-gray-500 dark:text-gray-300">
                      {name}
                    </button>
                  </a>
                ))}
                <a href={signUpLink} className="w-full mt-4">
                  <button className="text-gray-100 bg-blue-400 px-6 py-2 rounded-full font-bold shadow w-full hover:opacity-75">
                    Sign Up
                  </button>
                </a>
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.nav>
      </AnimatePresence>
    </div>
  )
}

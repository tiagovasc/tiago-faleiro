import TiagoLogo2 from 'assets/images/tiagologo_01.png'
import TiagoLogo from 'assets/images/tiagologo.png'

import { links } from 'components/nav'

export default function Footer(): JSX.Element {
  return (
    <footer className="flex flex-wrap items-center justify-center gap-x-10 gap-y-2 mx-auto w-full max-w-4xl px-10 pt-5 pb-20">
      <div className="h-8">
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
      {links.map(({ name, href }) => (
        <a href={href} className="text-gray-500">
          {name}
        </a>
      ))}
      <button className="block text-gray-100 bg-blue-400 px-6 py-2 rounded-full font-bold shadow w-fit h-fit hover:opacity-75">
        Sign Up
      </button>
    </footer>
  )
}

import TiagoLogo2 from 'assets/images/tiagologo_01.png'
import TiagoLogo from 'assets/images/tiagologo.png'

import { links } from 'components/nav'

export default function Footer(): JSX.Element {
  return (
    <footer className="flex flex-wrap items-center justify-center gap-x-10 gap-y-2 mx-auto w-full max-w-4xl px-10 py-20">
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
    </footer>
  )
}

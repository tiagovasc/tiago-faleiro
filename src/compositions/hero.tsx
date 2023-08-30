import { BsChevronDoubleDown } from 'react-icons/bs'
import { motion } from 'framer-motion'

import HeroBg from 'assets/images/hero-bg.png'
import Vector from 'assets/images/Vector.png'
import Tiago from 'assets/images/tiago.png'

export default function Hero(): JSX.Element {
  return (
    <section
      id="hero"
      className="relative flex flex-col items-center min-h-screen"
    >
      <motion.div
        className="z-[3] hidden md:block absolute bottom-20 text-3xl text-black dark:text-white"
        initial={{ y: 0 }}
        animate={{ y: -15 }}
        exit={{ y: 0 }}
        transition={{ repeat: Infinity, repeatType: 'mirror', duration: 0.6 }}
      >
        <BsChevronDoubleDown />
      </motion.div>
      <div className="z-[2] absolute w-3/5 sm:w-1/2 h-full bottom-0 right-0 flex items-end justify-center">
        <img src={Tiago} className="xl:h-5/6 object-cover" alt="tiago" />
      </div>
      <div className="z-[1] absolute w-3/4 lg:w-3/5 2xl:w-3/5 h-full bottom-0 right-0 flex items-end justify-end">
        <img
          src={Vector}
          className="object-fill w-full xl:h-5/6"
          alt="vector"
        />
      </div>
      <div className="absolute w-full h-full">
        <img
          src={HeroBg}
          className="object-cover w-full h-full"
          alt="background"
        />
      </div>
      <div className="z-[3] flex items-center justify-center w-full flex-1 pt-20 pb-10">
        <div className="flex flex-col gap-10 w-full max-w-6xl m-10">
          <p className="text-blue-400 -mb-2 font-bold">
            TIAGO&lsquo;S COACHING
          </p>
          <h1 className="text-6xl md:text-7xl lg:text-8xl max-w-md md:max-w-lg lg:max-w-4xl font-bold">
            Reaching Your <span className="text-blue-400">Fitness Goals</span>{' '}
            Has Never Been Easier.
          </h1>
          <p className="block md:hidden max-w-[225px] sm:max-w-sm md:max-w-lg text-gray-500 dark:text-gray-300">
            "My name is Tiago. I work for Renaissance Periodization (RP) and I
            have my own coaching business where I help people with their
            training and fitness goals..."
          </p>
          <a href="/#about" className="block md:hidden">
            <button className="text-gray-100 bg-blue-400 px-6 py-2 rounded-full w-fit font-bold shadow hover:opacity-75">
              Read more
            </button>
          </a>
        </div>
      </div>
    </section>
  )
}

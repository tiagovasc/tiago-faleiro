import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import cn from 'classnames'

About.P = AboutParagraph

export default function About(): JSX.Element {
  return (
    <section id="about" className="flex flex-col gap-10 items-center py-24">
      <p className="text-4xl text-blue-400 font-bold">ABOUT</p>
      <About.P>
        My name is Tiago. I am in my late 20s and I’m originally from Lisbon,
        although I’m currently living in Slovenia. I work for Renaissance
        Periodization (RP) and I have my own coaching business where I help
        people with their training and fitness goals.
      </About.P>
      <About.P>
        As a somewhat of a lifelong nerd, I delved into my fitness journey a
        decade ago, immersing myself in learning. Obsessed, I absorbed training
        and nutrition knowledge daily. From YouTube to books, blogs, and even
        scientific articles, I progressed to textbooks, courses, and
        certifications.
      </About.P>
      <About.P>
        I honed in on exercise and nutritional science, prioritizing evidence
        over tradition. I've felt the frustration of misguided advice, wasting
        effort without progress. With growing knowledge, my results improved.
        Let me help you avoid misinformation and reach your goals efficiently.
      </About.P>
    </section>
  )
}

export function AboutParagraph({ className = '', children }): JSX.Element {
  const [isCentered, setIsCentered] = useState(false)
  const targetElementRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    window.removeEventListener('scroll', handleScroll)

    function handleScroll() {
      if (!targetElementRef.current) return

      const rect = targetElementRef.current?.getBoundingClientRect()
      const centerY = window.innerHeight / 2
      const centerYMin = centerY - 300
      const centerYMax = centerY + 300

      const isElementCentered =
        rect.top >= centerYMin && rect.bottom <= centerYMax
      setIsCentered(isElementCentered)
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <motion.div
      ref={targetElementRef}
      animate={{ opacity: isCentered ? 1 : 0.2 }}
      className={cn(
        'text-lg font-medium lg:text-3xl max-w-xl lg:max-w-4xl mx-10',
        className
      )}
    >
      {children}
    </motion.div>
  )
}

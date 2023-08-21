import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

export default function About(): JSX.Element {
  return (
    <section id="about" className="flex flex-col gap-10 items-center py-24">
      <p className="text-4xl text-blue-400 font-bold">ABOUT</p>
      <AboutParagraph className="text-lg font-medium lg:text-3xl max-w-xl lg:max-w-4xl mx-10">
        My name is Tiago. I am in my late 20s and I’m originally from Lisbon,
        although I’m currently living in Slovenia. I work for Renaissance
        Periodization (RP) and I have my own coaching business where I help
        people with their training and fitness goals.
      </AboutParagraph>
      <AboutParagraph className="text-lg font-medium lg:text-3xl max-w-xl lg:max-w-4xl mx-10">
        As a somewhat of a lifelong nerd, I delved into my fitness journey a
        decade ago, immersing myself in learning. Obsessed, I absorbed training
        and nutrition knowledge daily. From YouTube to books, blogs, and even
        scientific articles, I progressed to textbooks, courses, and
        certifications.
      </AboutParagraph>
      <AboutParagraph className="text-lg font-medium lg:text-3xl max-w-xl lg:max-w-4xl mx-10">
        I honed in on exercise and nutritional science, prioritizing evidence
        over tradition. I've felt the frustration of misguided advice, wasting
        effort without progress. With growing knowledge, my results improved.
        Let me help you avoid misinformation and reach your goals efficiently.
      </AboutParagraph>
    </section>
  )
}

const AboutParagraph = ({ className, children }): JSX.Element => {
  const [isCentered, setIsCentered] = useState(false)
  const targetElementRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!targetElementRef.current) return

      const rect = targetElementRef.current?.getBoundingClientRect()
      const centerY = window.innerHeight / 2
      const centerYMin = centerY - 200
      const centerYMax = centerY + 200

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
      className={className}
    >
      {children}
    </motion.div>
  )
}

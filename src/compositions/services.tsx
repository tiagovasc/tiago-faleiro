import { createRef, useCallback, useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { FaCaretRight } from 'react-icons/fa'
import cn from 'classnames'

import TailwindBreakpoint from 'components/tailwind-breakpoint'

const services = [
  {
    title: 'What can I help you with?',
    list: [
      'Competing in bodybuilding or powerlifting',
      'Getting leaner with a sustainable dieting approach',
      'Gaining strength while improving technique and minimizing injury risk.',
      'Getting healthier and improving your quality of life'
    ]
  },
  {
    title: 'Who I cannot help?',
    list: [
      'Are trying to get better at any particular sport besides powerlifting or bodybuilding (e.g. soccer)',
      'Have any medical conditions, such as PCOS, hypothyroidism, eating disorders, etc.',
      'Pregnant or breastfeeding women',
      'People who are using performance-enhancing drugs or people under 18 years old.',
      'If you are in any category that doesn’t allow us to work together, if you email me I can recommend some good coaches that can help you.'
    ]
  },
  {
    title:
      'What are a few important things you should know about my coaching services?',
    list: [
      'YOU HAVE TO BE WILLING TO WORK HARD - I can help you reach your goals, but you’re the one doing the work. I can not train or diet for you.',
      'RESULTS TAKE TIME - I wish I could say I will get you super big, strong, or lean in a few weeks, but that just doesn’t happen. I don’t promise quick results, and everyone who does is being deceitful. This doesn’t mean you won’t get to your goals, but just be mindful it requires work and time.',
      'I ALWAYS HAVE SUSTAINABILITY IN MIND - I will never compromise long-term results for faster short-term progress.',
      'I’M NOT A MOTIVATIONAL COACH - The best way of thinking about our coach-client relationship is that I’m guiding you, but I can’t motivate you to train or diet. You have to have the willpower to reach your goals, and with my experience and knowledge, I will help to reach them in the easiest, safest and most effective way possible.'
    ]
  }
]

export default function Services(): JSX.Element {
  const listRefs = Array.from(new Array(3).fill(createRef()))
  const [maxHeight, setMaxHeight] = useState(0)
  const [index, setIndex] = useState(0)

  const getMaxListHeight = useCallback(() => {
    if (listRefs[0].current) {
      const heights = listRefs.map(ref => ref.current.clientHeight)
      const maxHeight = Math.max(...heights)
      setMaxHeight(maxHeight)
    }
  }, [listRefs])

  useEffect(() => {
    getMaxListHeight()
  }, [getMaxListHeight])

  return (
    <section
      id="services"
      className="flex flex-col md:flex-row max-w-screen overflow-hidden"
    >
      <TailwindBreakpoint onChange={getMaxListHeight} />
      <div className="flex flex-col gap-10 items-center justify-center px-10 py-10 md:py-20 w-full">
        <p className="text-blue-400 font-bold ">MY SERVICES</p>
        <div className="max-w-lg 2xl:max-w-2xl text-lg md:text-2xl">
          <AnimatePresence mode="wait">
            {services.map(({ title }, i) => (
              <motion.p
                onClick={() => setIndex(i)}
                whileHover={{ opacity: 1 }}
                animate={{
                  fontSize: index === i ? '2.25rem' : '1.5rem',
                  opacity: index === i ? 1 : 0.2,
                  fontWeight: index === i ? 700 : 500
                }}
                className={cn(
                  'cursor-pointer mb-2',
                  index === i ? 'text-4xl' : ''
                )}
              >
                <FaCaretRight className="inline" /> {title}
              </motion.p>
            ))}
          </AnimatePresence>
        </div>
      </div>
      <AnimatePresence mode="wait">
        <div
          key={index + ''}
          className="flex flex-col items-center justify-center pl-12 pr-10 pt-10 md:pt-20 pb-0 md:pb-20 w-full bg-blue-400 text-gray-100 dark:text-gray-800"
        >
          {services.map(({ title, list }, i) => (
            <ol
              ref={val => (listRefs[i].current = val)}
              className={cn(
                'max-w-lg 2xl:max-w-2xl lg:text-xl list-disc',
                i === index
                  ? 'block md:absolute opacity-1 pointer-events-auto'
                  : 'absolute opacity-0 pointer-events-none'
              )}
            >
              {list.map((name, _i) => (
                <motion.li
                  key={index + ''}
                  initial={{ opacity: index === i ? 0.2 : 0 }}
                  whileInView={{
                    opacity: index === i ? 1 : 0,
                    pointerEvents: index === i ? 'auto' : 'none'
                  }}
                  exit={{ opacity: 0 }}
                  transition={{ delay: 0.05 * _i }}
                  className="mb-2"
                >
                  {name}
                </motion.li>
              ))}
            </ol>
          ))}
          <div style={{ height: maxHeight }} className="hidden md:block" />
        </div>
      </AnimatePresence>
    </section>
  )
}

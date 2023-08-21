import { FaAngleDown, FaAngleUp } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { useState } from 'react'
import cn from 'classnames'

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
  const [index, setIndex] = useState<number | null>(null)

  return (
    <section
      id="services"
      className="flex flex-col items-center max-w-screen overflow-hidden pb-20 px-10 gap-10"
    >
      <p className="text-blue-400 font-bold text-4xl">MY SERVICES</p>
      <div className="flex flex-col gap-2 max-w-6xl ml-10 mr-10 w-full text-gray-100 dark:text-gray-800">
        {services.map(({ title, list }, i) => (
          <button
            onClick={index !== i ? () => setIndex(i) : undefined}
            className={cn(
              'appearance-none text-left bg-blue-400 flex flex-col p-5 md:p-10 shadow-xl',
              i + 1 === services.length ? 'rounded-b-xl' : '',
              index !== i ? 'cursor-pointer' : 'cursor-default',
              i === 0 ? 'rounded-t-xl' : ''
            )}
          >
            <div className="flex items-center justify-between">
              <p className="text-lg lg:text-2xl">{title}</p>
              <motion.span animate={{ opacity: index === i ? 0 : 1 }}>
                <FaAngleDown className="text-2xl" />
              </motion.span>
            </div>
            <motion.div
              animate={{ height: index === i ? 'auto' : 0 }}
              className="overflow-hidden"
            >
              <ol className="list-disc px-5 pt-5 md:pt-10 pb-0 md:pb-5">
                {list.map((name, _i) => (
                  <motion.li
                    whileInView={{
                      opacity: 1,
                      pointerEvents: 'auto'
                    }}
                    exit={{ opacity: 0 }}
                    transition={{ delay: 0.05 * _i }}
                    className="mb-2"
                  >
                    {name}
                  </motion.li>
                ))}
              </ol>
              <button
                onClick={() => setIndex(null)}
                className="flex justify-center px-4 mx-auto"
              >
                <FaAngleUp className="text-2xl" />
              </button>
            </motion.div>
          </button>
        ))}
      </div>
    </section>
  )
}

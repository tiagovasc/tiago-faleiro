import { LiaChalkboardTeacherSolid } from 'react-icons/lia'
import { GiTeamIdea } from 'react-icons/gi'
import { GoGoal } from 'react-icons/go'
import { motion } from 'framer-motion'
import cn from 'classnames'

const benefits = [
  {
    title: 'Advice',
    icon: LiaChalkboardTeacherSolid,
    description:
      'In the age of internet searches, solid knowledge is essential. Without it, deciphering good information becomes tough.\n\nWhat foods to eat? Calorie needs? Optimal training? Online answers are often contradictory. A coach offers clarity and reasoning. No more worry about legitimacy.'
  },
  {
    title: 'Accountability',
    icon: GiTeamIdea,
    description:
      'Many fail by quitting necessary actions for desired results, even with knowledge. Alone, accountability falters. With a watchful eye, responsibility is heightened.\n\nKnowing someone cares ensures progress. Accountability prevents self-sabotage, ensuring plan adherence.'
  },
  {
    title: 'Objectivity',
    icon: GoGoal,
    description:
      "Self-assessment in training and dieting is tough. Coaches seek outside guidance for the same reason. Vast knowledge doesn't ensure objectivity in your progress.\n\nOverthinking and overreacting are common. A coach brings impartial analysis, safeguarding against hasty, harmful changes."
  }
  // UPTO 3 ONLY
]

export const rotateViewMotion = delay => ({
  initial: { rotate: -45 },
  whileInView: { rotate: 0, transition: { delay } }
})

export default function Benefits(): JSX.Element {
  return (
    <section
      id="benefits"
      className="bg-blue-400 py-20 flex flex-col gap-10 items-center justify-center mb-0"
    >
      <p className="text-gray-100 dark:text-gray-800 font-bold text-4xl">
        BENEFITS
      </p>
      <div className="rounded-xl max-w-6xl bg-gray-100 dark:bg-gray-800 shadow-xl -mb-0 ml-10 mr-10 px-5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10 md:py-20 gap-y-10 md:gap-y-20">
          {benefits.map((item, index) => (
            <motion.div
              initial={{ opacity: 0.2 }}
              whileInView={{
                opacity: 1,
                transition: { delay: 0.2 + 0.2 * index }
              }}
              className={cn(
                'flex flex-col gap-4 items-center px-4 md:px-20',
                index + 1 === benefits.length
                  ? 'col-span-1 md:col-span-2 lg:col-span-1'
                  : 'border-r-0 lg:border-r-2 border-gray-300 dark:border-gray-500',
                index === benefits.length - 2 ? 'border-r-0 lg:border-r-2' : ''
              )}
            >
              <motion.div
                {...rotateViewMotion(0.4 + 0.2 * index)}
                className="flex items-center justify-center rounded-full w-24 h-24 bg-blue-400 text-6xl shadow text-gray-100 dark:text-gray-800"
              >
                {<item.icon />}
              </motion.div>
              <p className="text-4xl font-bold">{item.title}</p>
              <p className="text-center whitespace-pre-line overflow-hidden">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

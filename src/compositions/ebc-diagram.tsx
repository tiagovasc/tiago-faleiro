import { motion } from 'framer-motion'
import { useState } from 'react'

import ebcChart from 'assets/images/chart.png'
import ebcChart01 from 'assets/images/chart_01.png'

const foundations = [
  {
    title: 'Research Evidence',
    description:
      'Decisions must be based on scientific evidence, and the strength of the evidence should be considered. For example, research has consistently shown that high volume is beneficial for hypertrophy.'
  },
  {
    title: 'Coaching Experience',
    description:
      'Practitioner experience is paramount and should be synergistic with research for the best outcomes. For instance, I have noticed that low-intensity deloads are often detrimental to strength in a powerlifting context. Reducing fatigue by relative intensity and volume instead seems to work better in my experience.'
  },
  {
    title: "Client's Preferences",
    description:
      "The client's preferences and values must be taken into account, and the ultimate goal is to help the client reach their own personal goals. While this also applies to training, it’s best seen in nutrition. No matter how good of a plan it is, people aren’t going to follow a diet they don’t like."
  }
]

export default function EbcDiagram(): JSX.Element {
  const [expand, setExpand] = useState(false)

  return (
    <motion.section
      initial={{ height: '250px' }}
      animate={{ height: expand ? 'auto' : '250px' }}
      id="ebc-diagram"
      className="relative bg-blue-400 text-gray-100 dark:text-gray-800 overflow-hidden"
    >
      <motion.div
        animate={{
          opacity: expand ? 0 : 1,
          pointerEvents: expand ? 'none' : 'auto'
        }}
        className="flex flex-col items-center justify-end p-5 absolute w-full h-full top-0 right-0 bg-gradient-to-t from-blue-400"
      >
        <button
          onClick={() => setExpand(true)}
          className="text-gray-800 dark:text-gray-100 bg-gray-100 dark:bg-gray-800 px-6 py-2 rounded-full font-bold shadow w-fit hover:opacity-75"
        >
          More info
        </button>
      </motion.div>
      <div className="px-10 pb-20">
        <div className="flex flex-col gap-5 max-w-6xl mx-auto">
          <p className="text-sm max-w-4xl mx-auto">
            I follow an approach to my coaching based on evidence-based practice
            (EBP), which optimizes decision-making for medical practitioners.
            Here I adapted it to evidence-based coaching (EBC).
          </p>
          <div className="flex flex-col lg:flex-row gap-5">
            <div className="flex flex-col gap-5 max-w-xl lg:max-w-lg mx-auto">
              <p className="block lg:hidden text-4xl font-bold">
                EBC relies on 3 foundations
              </p>
              <img
                src={ebcChart01}
                className="hidden dark:block my-auto"
                alt="ebc-chart"
              />
              <img
                src={ebcChart}
                className="block dark:hidden my-auto"
                alt="ebc-chart"
              />
            </div>
            <div className="flex-1 flex flex-col gap-5 max-w-xl">
              <p className="hidden lg:block text-4xl font-bold">
                EBC relies on 3 foundations
              </p>
              {foundations.map(({ title, description }) => (
                <div>
                  <p className="text-2xl font-bold">{title}</p>
                  <p>{description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

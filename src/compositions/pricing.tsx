import { FaCheck, FaTimes } from 'react-icons/fa'
import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import cn from 'classnames'

import Dropdown from 'components/dropdown'

const features = [
  'Evidence-Based Principles', // 0
  'Individualized for Your Needs', // 1
  'Initial 1 on 1 Video-Call', // 2
  'Coaching Booklet', // 3
  'Monthly 1 on 1 Video Call', // 4
  'Weekly Plan Adjustments', // 5
  'Weekly Scheduled Check-Ins', // 6
  'Daily Communication (Whatsapp/Messenger)' // 7
]

const pricings = [
  {
    planMonth: 1,
    plans: [
      {
        name: 'Basic',
        price: {
          usd: 175,
          gbp: 130,
          eur: 150
        },
        exclusion: [4],
        link: 'https://tripetto.app/run/IUA2V0LPS6'
      },
      {
        name: 'Pro',
        price: {
          usd: 200,
          gbp: 145,
          eur: 175
        },
        exclusion: [],
        link: 'https://tripetto.app/run/IUA2V0LPS6'
      }
    ]
  },
  {
    planMonth: 3,
    plans: [
      {
        name: 'Basic',
        price: {
          usd: 475,
          gbp: 350,
          eur: 405
        },
        exclusion: [4],
        link: 'https://tripetto.app/run/IUA2V0LPS6'
      },
      {
        name: 'Pro',
        price: {
          usd: 540,
          gbp: 390,
          eur: 475
        },
        exclusion: [],
        link: 'https://tripetto.app/run/IUA2V0LPS6'
      }
    ]
  },
  {
    planMonth: 6,
    plans: [
      {
        name: 'Basic',
        price: {
          usd: 895,
          gbp: 665,
          eur: 765
        },
        exclusion: [4],
        link: 'https://tripetto.app/run/IUA2V0LPS6'
      },
      {
        name: 'Pro',
        price: {
          usd: 1020,
          gbp: 740,
          eur: 895
        },
        exclusion: [],
        link: 'https://tripetto.app/run/IUA2V0LPS6'
      }
    ]
  }
]

const planMonthToName = val => (val !== 1 ? `per ${val} months` : 'per month')
const planNameToMonth = val => Number(val.split(' ')[0] || '0')

const planNames = pricings.map(({ planMonth }) => planMonthToName(planMonth))
const planCurrencies = Object.keys(pricings[0]?.plans[0]?.price || {}).map(
  val => val.toUpperCase()
)
const currencySymbols = {
  usd: '$',
  gbp: '£',
  eur: '€'
}

export default function Pricing(): JSX.Element {
  const [currency, setCurrency] = useState(planCurrencies[0])
  const [index, setIndex] = useState(0)

  return (
    <section
      id="pricing"
      className="bg-blue-400 pb-20 flex flex-col gap-10 items-center justify-center mb-0"
    >
      <p className="text-gray-100 dark:text-gray-800 font-bold">PRICING</p>
      <div className="flex flex-col gap-5 items-center">
        <p className="text-gray-100 dark:text-gray-800 m-10 max-w-4xl text-4xl text-center -mt-3 mb-1">
          Find the plan that suits your needs.
        </p>
        <div className="text-gray-100 dark:text-gray-800 flex flex-wrap lg:grid grid-cols-2 gap-10 max-w-4xl">
          <div>
            <div className="flex flex-col gap-2 text-center w-fit">
              Duration
              <Dropdown
                value={planNames[index]}
                items={planNames}
                onChange={val => setIndex(planNames.indexOf(val))}
              />
            </div>
          </div>
          <div>
            <div className="flex flex-col gap-2 text-center w-fit">
              Currency
              <Dropdown
                value={currency}
                items={planCurrencies}
                onChange={val => setCurrency(val)}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-10 mx-10">
        {pricings[index].plans.map((item, i) => (
          <AnimatePresence mode="wait">
            <motion.div
              key={index + currency}
              initial={{ y: 20 }}
              animate={{ y: 0 }}
              exit={{ y: 20 }}
              transition={{ delay: 0.2 * i }}
              className={cn(i % 2 ? '' : 'lg:mt-10')}
            >
              <div className="rounded-xl max-w-6xl bg-gray-100 dark:bg-gray-800 shadow-xl px-5 py-5">
                <div className="flex flex-col gap-5 items-center p-5 md:p-10">
                  <p className="text-2xl font-bold -mt-2">{item.name}</p>
                  <p>One-time payment</p>
                  <p className="text-6xl font-bold">
                    {currencySymbols[currency.toLowerCase()]}
                    {item.price[currency.toLowerCase()]}
                    <span className="text-base font-medium">
                      /{planNames[index].replace(/per /g, '')}
                    </span>
                  </p>
                  <ol className="flex flex-col gap-2 max-w-[15rem] mt-1 mb-2">
                    {features.map((val, i) => (
                      <li className="flex gap-2">
                        <div className="inline-block rounded-full p-0.5 w-fit h-fit mt-0.5">
                          {item.exclusion.includes(i) ? (
                            <FaTimes className="text-red-400" />
                          ) : (
                            <FaCheck className="text-green-400" />
                          )}
                        </div>
                        <p
                          className={cn(
                            item.exclusion.includes(i)
                              ? 'decoration-2 line-through opacity-75'
                              : 'no-underline'
                          )}
                        >
                          {val}
                        </p>
                      </li>
                    ))}
                  </ol>
                  <a href={item.link} className="w-full">
                    <button className="text-gray-100 bg-blue-400 px-6 py-2 rounded-full font-bold shadow w-full hover:opacity-75">
                      Sign Up
                    </button>
                  </a>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        ))}
      </div>
    </section>
  )
}

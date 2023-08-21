import { motion } from 'framer-motion'
import { useState } from 'react'

export default function SigningUp(): JSX.Element {
  const [expand, setExpand] = useState(false)

  return (
    <motion.section
      initial={{ height: '0px' }}
      animate={{ height: expand ? 'auto' : '4rem' }}
      id="signing-up"
      className="relative bg-blue-400 text-gray-100 dark:text-gray-800 overflow-hidden -mt-1"
    >
      <motion.div
        animate={{
          opacity: expand ? 0 : 1,
          pointerEvents: expand ? 'none' : 'auto'
        }}
        className="z-[1] flex flex-col items-center justify-end p-5 absolute w-full h-full top-0 right-0"
      >
        <button
          onClick={() => setExpand(true)}
          className="text-gray-800 dark:text-gray-100 bg-gray-100 dark:bg-gray-800 px-6 py-2 rounded-full font-bold shadow w-fit hover:opacity-75"
        >
          More Info About Pricing
        </button>
      </motion.div>
      <div className="px-10 pb-20">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: expand ? 1 : 0 }}
          className="flex flex-col gap-5 max-w-4xl mx-auto"
        >
          <div className="flex flex-col gap-5">
            <p>
              With both the Gold and Silver packages, you get a completely
              individualized plan to reach your goals. The difference is the
              amount of contact you have with me.
            </p>
            <p>
              If you have the gold package, then you can ask me any questions or
              concerns you may have every day, by either WhatsApp or Messager.
              We will also have a private Facebook group just for the two of us.
              This will be used for the weekly check-in with me where you
              describe how your week went. Ideally, the check-in is done by a
              2-4 minute video. The Facebook group is also useful to post
              progress pictures, lifting videos for technique analysis, or
              anything else that you want to share.
            </p>
            <p>
              Based on your weekly feedback and the data you logged during the
              week, I will adjust your plan as needed, and a new week will
              automatically show up in your client spreadsheet. At the end of
              the month, I am available for a 1on1 video call if you want to
              discuss any aspect of your diet or training more in-depth.
            </p>
            <p>
              With the silver package, the contact is more limited. You also
              have a scheduled check-in, but it's monthly instead of weekly. The
              plan is changed monthly rather than weekly, and the contact is
              done by email. There is no video call beyond the initial
              assessment call.{' '}
            </p>
            <p>
              The difference is how much guidance you need. If you struggle with
              accountability, as most people do, the gold package is preferred.
              But if you mostly want to get a solid training and diet program to
              follow, or if your budget is limited, then the silver package
              might be a better option.
            </p>

            <p>
              There are a few situations that grant a discount: <br />
              <br /> ○ Clients that have worked with me for longer than 1 year
              get 5% off <br /> ○ Referrals or double-sign ups get a 15%
              discount for both parties (30% total).
              <br />
              <br /> The coaching booklet refers to a physical book that all my
              clients get. I wrote it myself and only my clients have access.
              This started as a private page on my website, but it got so big
              that I figured a book would be more suitable. <br />
              <br /> You will have it shipped to your door when you sign up. It
              includes detailed information about training and nutrition that is
              specific to how I do my client’s programming and nutrition. It
              also has many nutrition tips on how to make dieting easier, such
              as how to structure meal prepping, how to eat out while dieting,
              specific recipes, and more.
            </p>
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}

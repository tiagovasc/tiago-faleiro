import { useCallback, useEffect, useState } from 'react'
import { FaCaretLeft, FaCaretRight } from 'react-icons/fa'
import useEmblaCarousel from 'embla-carousel-react'
import { motion } from 'framer-motion'
import cn from 'classnames'

import img01 from 'assets/images/articles/01.png'
import img02 from 'assets/images/articles/02.png'
import img03 from 'assets/images/articles/03.png'
import img04 from 'assets/images/articles/04.png'
import img05 from 'assets/images/articles/05.png'
import img06 from 'assets/images/articles/06.png'
import img07 from 'assets/images/articles/07.png'
import img08 from 'assets/images/articles/08.png'
import img09 from 'assets/images/articles/09.png'
import img10 from 'assets/images/articles/10.png'
import img11 from 'assets/images/articles/11.png'
import img12 from 'assets/images/articles/12.png'
import img13 from 'assets/images/articles/13.png'

const articles = [
  { title: 'The Nutrient Density Index', src: img01 },
  {
    title:
      'Mesocycle Progression in Hypertrophy: Volume Versus Intensity (Peer-reviewed)',
    src: img02
  },
  {
    title: 'LoseFatBuildMuscle Podcast - Why You’re Not Losing Weight',
    src: img03
  },
  { title: 'Everything you need to know about Creatine', src: img04 },
  { title: 'How to diet successfully when you work nights', src: img05 },
  { title: 'Alcohol & Dieting', src: img06 },
  { title: 'How to deadlift with a straight back', src: img07 },
  { title: 'The Most Common Newbie Mistakes in Weight Training', src: img08 },
  { title: 'Why body composition is under-rated for Powerlifting', src: img09 },
  { title: 'Tips to Successfully Navigate Dining Out', src: img10 },
  { title: 'How many days should you train per week?', src: img11 },
  { title: 'Is strength training safe for children?', src: img12 },
  { title: 'In-depth on Fiber', src: img13 }
]

//const startIndex = Math.floor(articles.length / 2)
const startIndex = 0

export default function Articles(): JSX.Element {
  const [emblaRef, emblaApi] = useEmblaCarousel({ startIndex })
  const [selectedIndex, setSelectedIndex] = useState(startIndex)

  const onSelect: any = useCallback(
    (_emblaApi, eventName) => {
      if (emblaApi) setSelectedIndex(emblaApi.selectedScrollSnap())
    },
    [emblaApi]
  )

  const onPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const onNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  const removeOnSelectListener = useCallback(() => {
    if (emblaApi) emblaApi.off('select', onSelect)
  }, [emblaApi, onSelect])

  useEffect(() => {
    if (emblaApi) emblaApi.on('select', onSelect)
  }, [emblaApi, onSelect])

  return (
    <section id="articles" className="flex flex-col gap-10 py-20">
      <p className="font-bold text-center text-4xl">ARTICLES</p>
      <div className="relative flex items-center justify-center">
        <div className="flex absolute z-[1] text-8xl translate-x-[-9999px]">
          <FaCaretLeft
            onClick={onPrev}
            className={cn(
              'hover:opacity-75 translate-x-[9999px]',
              selectedIndex === 0
                ? 'opacity-[0.4] cursor-not-allowed'
                : 'opacity-1 cursor-pointer'
            )}
          />
          <div className="w-64 -mx-5 sm:mx-3" />
          <FaCaretRight
            onClick={onNext}
            className={cn(
              'hover:opacity-75 translate-x-[9999px]',
              selectedIndex === articles.length - 1
                ? 'opacity-[0.2] cursor-not-allowed'
                : 'opacity-1 cursor-pointer'
            )}
          />
        </div>
        <div ref={emblaRef}>
          <div className="flex">
            {articles.map(({ title, src }, i) => (
              <motion.div
                animate={{
                  opacity: i === selectedIndex ? 1 : 0.2,
                  pointerEvents: i === selectedIndex ? 'auto' : 'none'
                }}
                className="flex flex-col gap-5 w-64 mx-5"
              >
                <img
                  alt="article"
                  className="w-full rounded-xl shadow"
                  src={src}
                />
                <p className="text-center">{title}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

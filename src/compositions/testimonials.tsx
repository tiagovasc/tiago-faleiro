import { useCallback, useEffect, useRef, useState } from 'react'
import { FaCaretLeft, FaCaretRight } from 'react-icons/fa'
import useEmblaCarousel from 'embla-carousel-react'
import { motion } from 'framer-motion'
import cn from 'classnames'

const testimonials = [
  {
    title: 'Michael, Communications (Switzerland)',
    src: 'https://player.vimeo.com/video/592187064?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479'
  },
  {
    title: 'Raman, Pilot (USA)',
    src: 'https://player.vimeo.com/video/592206698?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479'
  },
  {
    title: 'Jeremy, Controls Engineer (USA)',
    src: 'https://player.vimeo.com/video/592218149?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479'
  },
  {
    title: 'Filipe, Entrepreneur (Portugal)',
    src: 'https://player.vimeo.com/video/592191653?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479'
  },
  {
    title: 'Naeem, Bar Assistant Manager (Canada)',
    src: 'https://player.vimeo.com/video/592182975?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479'
  },
  {
    title: 'Eric, Trainer and Gym Owner (USA)',
    src: 'https://player.vimeo.com/video/592195342?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479'
  },
  {
    title: 'Lawrence, Bank Analyst (USA)',
    src: 'https://player.vimeo.com/video/592214304?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479'
  },
  {
    title: 'Christian, Trainer and Gym Owner (Spain)',
    src: 'https://player.vimeo.com/video/592200753?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479'
  }
]

//const startIndex = Math.floor(testimonials.length / 2)
const startIndex = 0

export default function Testimonials(): JSX.Element {
  const [emblaRef, emblaApi] = useEmblaCarousel({ startIndex })
  const [selectedIndex, setSelectedIndex] = useState(startIndex)
  const [iFrameWidth, setiFrameWidth] = useState(300)
  const iFrameRef = useRef<HTMLIFrameElement | null>(null)

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
    if (iFrameRef.current) setiFrameWidth(iFrameRef.current.offsetWidth)
  }, [emblaApi, onSelect])

  return (
    <section
      id="testimonials"
      className="flex flex-col gap-10 bg-blue-400 py-20 dark:text-gray-800 text-gray-100"
    >
      <p className="font-bold text-center text-4xl">TESTIMONIALS</p>
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
          <div style={{ width: iFrameWidth }} className="-mx-5 sm:mx-3" />
          <FaCaretRight
            onClick={onNext}
            className={cn(
              'hover:opacity-75 translate-x-[9999px]',
              selectedIndex === testimonials.length - 1
                ? 'opacity-[0.2] cursor-not-allowed'
                : 'opacity-1 cursor-pointer'
            )}
          />
        </div>
        <div ref={emblaRef}>
          <div className="flex">
            {testimonials.map(({ title, src }, i) => (
              <motion.iframe
                ref={iFrameRef}
                animate={{
                  opacity: i === selectedIndex ? 1 : 0.2,
                  pointerEvents: i === selectedIndex ? 'auto' : 'none'
                }}
                className="mx-5"
                height={380}
                src={src}
                frameBorder="0"
                allow="autoplay;fullscreen;picture-in-picture"
                allowFullScreen={true}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

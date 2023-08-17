import { useEffect, useCallback, useRef, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { useInView } from 'framer-motion'

import img01 from 'assets/images/transformations/01.png'
import img02 from 'assets/images/transformations/02.png'
import img03 from 'assets/images/transformations/03.png'
import img04 from 'assets/images/transformations/04.png'
import img05 from 'assets/images/transformations/05.png'
import img06 from 'assets/images/transformations/06.png'
import img07 from 'assets/images/transformations/07.png'
import img08 from 'assets/images/transformations/08.png'
import img09 from 'assets/images/transformations/09.png'
import img10 from 'assets/images/transformations/10.png'

import TailwindBreakpoint from 'components/tailwind-breakpoint'

const media = [
  img01,
  img02,
  img03,
  img04,
  img05,
  img06,
  img07,
  img08,
  img09,
  img10
]
const mediaByIndex = index => media[index % media.length]

export default function Transformations(): JSX.Element {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    dragFree: false
  })
  const imgWidthRef = useRef<HTMLParagraphElement | null>(null)
  const sectionRef = useRef<HTMLElement | null>(null)
  const isInView = useInView(sectionRef)
  const rafId = useRef(0) // requestAnimationFrame ID

  const [slideCount, setSlideCount] = useState(media.length)
  const [reInitCount, setReInitCount] = useState(0)
  const [speed, setSpeed] = useState(-0.1)
  const slides = Array.from(Array(slideCount).keys())

  const handleWindowChange = value => {
    if (imgWidthRef.current) {
      const imgWidth = imgWidthRef.current.offsetWidth
      const imgFitCount = window.innerWidth / imgWidth
      setSlideCount(Math.ceil(imgFitCount / media.length) * media.length)
    }

    if (['base', 'sm', 'md'].includes(value)) setSpeed(-0.5)
    else setSpeed(-0.1)
  }

  const animate = useCallback(() => {
    if (!emblaApi || !rafId.current) return

    const engine: any = emblaApi.internalEngine()
    engine.location.add(speed)
    engine.target.set(engine.location)
    engine.scrollLooper.loop(-1)
    engine.slideLooper.loop()
    engine.translate.to(engine.location)
    rafId.current = requestAnimationFrame(animate)
  }, [emblaApi, speed])

  const startAutoScroll = useCallback(() => {
    rafId.current = requestAnimationFrame(animate)
  }, [animate])

  const stopAutoScroll = useCallback(() => {
    const canceled = cancelAnimationFrame(rafId.current)
    rafId.current = canceled !== undefined ? canceled : 0
  }, [])

  useEffect(() => {
    if (!emblaApi || reInitCount >= 10) return
    setReInitCount(reInitCount + 1)
    emblaApi.reInit()

    emblaApi.on('pointerDown', stopAutoScroll)
    emblaApi.on('settle', startAutoScroll)

    startAutoScroll()
    return () => stopAutoScroll()
  }, [
    reInitCount,
    isInView,
    slideCount,
    emblaApi,
    startAutoScroll,
    stopAutoScroll
  ])

  return (
    <section
      ref={sectionRef}
      id="transformations"
      className="flex flex-col gap-10 items-center py-20"
    >
      <TailwindBreakpoint onChange={handleWindowChange} />
      <p ref={imgWidthRef} className="text-blue-400 font-bold text-center w-64">
        TRANSFORMATIONS
      </p>
      <div className="w-full max-w-screen overflow-clip">
        <div ref={emblaRef} className="mx-auto w-screen">
          <div className="flex">
            {slides.map(index => (
              <img
                key={index}
                src={mediaByIndex(index)}
                alt={'transformation-' + (index + 1)}
                className="relative w-64 mx-5 shadow rounded-xl"
              />
            ))}
          </div>
        </div>
      </div>
      <p className="m-10 max-w-4xl text-4xl text-center mb-1">
        I believe in good communication and a fully transparent coaching
        process.
      </p>
    </section>
  )
}

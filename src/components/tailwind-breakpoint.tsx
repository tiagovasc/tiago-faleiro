import { useEffect } from 'react'

export interface TailwindBreakpointProps {
  onChange: (breakpoint: 'base' | 'sm' | 'md' | 'lg' | 'xl' | '2xl') => void
}

export default function TailwindBreakpoint({
  onChange
}: TailwindBreakpointProps): JSX.Element {
  useEffect(() => {
    const handleResize = () => {
      const { innerWidth } = window

      switch (true) {
        case innerWidth < 640:
          onChange('base')
          break
        case innerWidth < 768:
          onChange('sm')
          break
        case innerWidth < 1024:
          onChange('md')
          break
        case innerWidth < 1280:
          onChange('lg')
          break
        case innerWidth < 1536:
          onChange('xl')
          break
        default:
          onChange('2xl')
          break
      }
    }

    handleResize()
    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [onChange])

  return <></>
}

import { motion } from 'framer-motion'
import { useEffect } from 'react'

const variants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 20 }
}

export interface PageProps {
  title?: string
  animate?: boolean
  children: React.ReactNode
}

export default function Page({
  animate = true,
  children,
  title
}: PageProps): JSX.Element {
  useEffect(() => {
    if (title) document.title = title + '- Tiago Faleiro'
    else document.title = 'Tiago Faleiro'
  }, [title])

  return animate ? (
    <AnimatedPage title={title} children={children} />
  ) : (
    <>{children}</>
  )
}

function AnimatedPage(props): JSX.Element {
  return (
    <motion.div
      className="font-medium text-gray-800 dark:text-gray-100 bg-gray-100 dark:bg-gray-800 overflow-hidden"
      initial="initial"
      animate="animate"
      exit="exit"
      variants={variants}
      transition={{ duration: 0.2, type: 'easeInOut' }}
    >
      {props.children}
    </motion.div>
  )
}

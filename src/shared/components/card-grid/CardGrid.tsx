import { ReactNode } from 'react'
import styles from './card-grid.module.css'
import { useInfinityScroll } from '@hooks/useInfinityScroll.tsx'

interface CardGridProps<T> {
  list: T[]
  children: ReactNode
}

export const CardGrid = <T,>({ list, children }: CardGridProps<T>) => {
  const { intersectContainer } = useInfinityScroll<T>(list)

  return (
    <>
      <div className={styles.content}>{children}</div>
      <div className={styles.intersect} ref={intersectContainer}></div>
    </>
  )
}

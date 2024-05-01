import { useEffect, useRef, useState } from 'react'

export const useInfinityScroll = <T,>(list: T[]) => {
  const intersectContainer = useRef<HTMLDivElement>(null)
  const [piece, setPiece] = useState<T[]>([])

  useEffect(() => {
    setPiece(list.slice(0, 10))
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0]
        if (!entry.isIntersecting) return
        setPiece((prev) => [...prev, ...list.slice(prev.length, prev.length + 20)])
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.2,
      },
    )

    if (intersectContainer.current) {
      observer.observe(intersectContainer.current)
    }

    return () => {
      if (!intersectContainer.current) return
      observer.unobserve(intersectContainer.current)
    }
  }, [list])

  return { piece, intersectContainer }
}

import { FC, ReactNode, useEffect, useRef } from 'react'

// Parallax on scroll
const Parallax: FC<{ children: ReactNode }> = ({ children }) => {
   useEffect(() => parallax(), [])
   const parallaxRef = useRef<HTMLDivElement>(null)
   const parallax = () => {
      let parallaxOffset = 0
      let ease = 0.75
      window.addEventListener('scroll', _ => {
         if (
            window.scrollY < window.innerHeight &&
            window.innerWidth >= 1280 &&
            (navigator as any).deviceMemory >= 8
         )
            parallaxOffset = window.scrollY * ease
         else if (window.innerWidth < 1280) parallaxOffset = 0

         parallaxRef.current &&
            (parallaxRef.current.style.transform = `translateY(${parallaxOffset}px)`)
      })
   }
   return <div ref={parallaxRef}>{children}</div>
}

export default Parallax

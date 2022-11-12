const animation = () => {
   /**
    * Animation On Scroll (with IntersectionObserver)
    * Start the animation when the element is on the viewport
    */
   const animations = document.body.querySelectorAll(
         '.animate'
      ) as NodeListOf<Element>,
      animateOptions = {
         threshold: 0.3,
      },
      animateOnScrolling = new IntersectionObserver(
         (elements: IntersectionObserverEntry[]) => {
            elements.forEach((element: IntersectionObserverEntry) => {
               if (
                  element.isIntersecting &&
                  !element.target.classList.contains('animated')
               ) {
                  let duration =
                        (getStyle(element.target, 'animation-duration').replace(
                           's',
                           ''
                        ) as never) * 1000,
                     animateTimeout = duration + 100
                  startAnimate(element.target, animateTimeout)
               }
            })
         },
         animateOptions
      )
   // Execute the animateOnScrolling(observer)
   animations.forEach((animate: Element) => {
      animateOnScrolling.observe(animate)
   })
   // Get element style
   function getStyle(element: Element, property: string) {
      return getComputedStyle(element).getPropertyValue(property)
   }
   // Start the animations
   const startAnimate = (element: Element, animateTimeout: number) => {
      element.classList.add('animated')
      setTimeout(() => element.classList.remove('animate'), animateTimeout)
   }
}
export default animation

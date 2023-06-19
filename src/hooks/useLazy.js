import  { useEffect, useState } from "react";

export function useLazyLoad(element) {
  let observer
  const [show, setShow] = useState(false)

  useEffect(() =>{
      const onChange = (entries, observer) =>{
          const el = entries[0]
          if(el.isIntersecting){
              setShow(true)
              observer.disconnect()
          }
      }

      Promise.resolve(
          typeof IntersectionObserver ==! 'undefined'
              ? IntersectionObserver
              : import('intersection-observer')
      ).then(() =>{
          observer = new IntersectionObserver(onChange, {
              rootMargin: '-100px'
          })

          observer.observe(element.current)
      })

      return () => observer && observer.disconnect()
  })
  return show
}
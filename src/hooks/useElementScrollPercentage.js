import React, { useEffect, useRef, useState } from 'react'

export const useElementScrollPercentage = () => {
    const containerRef = useRef(null)
    const [percentage, setPercentage] = useState(0)

    useEffect(()=>{
        window.addEventListener("scroll", () => {
            let elementDistanceToTop = window.pageYOffset+containerRef.current.getBoundingClientRect().top
            if((window.scrollY-elementDistanceToTop)<=containerRef.current.offsetHeight && (window.scrollY-elementDistanceToTop)>0){
                setPercentage(
                  ((window.scrollY-elementDistanceToTop)/containerRef.current.offsetHeight).toFixed(2)
                )
            }          
        });   
    }, [])

    return [ containerRef, percentage ]
}



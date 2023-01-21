import React from 'react'
import { TESTIMONIES } from '../constants/testimonies'
import { useInView } from 'react-intersection-observer'

export const Testimonies = () => {
  const { ref, inView } = useInView({ threshold: 1, triggerOnce:true })

  return (
    <section id="testimonies" className="px-2 sm:px-5 min-h-screen w-full flex flex-wrap flex-col md:flex-row justify-center items-center gap-10">
    <div ref={ref} className={`opacity-0 ${ inView && 'opacity-100 animate-scaleY origin-top' } flex justify-center items-start flex-wrap gap-32`}>
      { TESTIMONIES.map((testimony, index)=>(
          <div className="relative w-[220px] sm:w-[250px] min-h-[350px] shadow-xl shadow-gray-300 rounded-2xl p-5" key={'testimonies'+testimony.name+index}>
              <svg className='my-5' width="64" height="44" viewBox="0 0 64 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M44 43.8652L52 27.9142H36V0H64V27.9142L56 43.8652H44ZM8 43.8652L16 27.9142H0V0H28V27.9142L20 43.8652H8Z" fill="#C5C3C3"/>
              </svg>

              <p className="font-normal text-gray-600 text-sm mb-4 italic border-b-2 border-gray-300 pb-10">{testimony.message}</p>
              <p className=" text-gray-600 text-xs text-right font-bold mt-3 italic">{testimony.name}</p>
              <p className="font-normal text-gray-600 text-xs text-right mt-1 italic">{testimony.position}</p>
          </div>
      ))}
    </div>
    </section>
  )
}

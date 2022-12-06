import React from 'react'
import { TESTIMONIES } from '../constants/testimonies'

export const Testimonies = () => {
  return (
    <section id="testimonies" className="px-5 min-h-screen w-full flex flex-wrap flex-col md:flex-row justify-center gap-10 items-center py-36">
    { TESTIMONIES.map((testimony, index)=>(
        <div className="w-[240px] min-h-[100px]" key={'testimonies'+testimony.name+index}>
            <p className="italic font-normal tracking-wide text-gray-800 text-sm">${testimony.message}</p>
            <p className="font-normal text-gray-600 text-xs text-right mt-3">${testimony.name}</p>
            <p className="font-normal text-gray-600 text-xs text-right mt-1">${testimony.position}</p>
        </div>
    ))}
    </section>
  )
}


const testimoniesContainer = document.querySelector('#testimonies')



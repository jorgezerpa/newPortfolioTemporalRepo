import React from 'react'
import { useElementScrollPercentage } from '../hooks/useElementScrollPercentage'

export const Hero = () => {
    const [containerRef, percentage] = useElementScrollPercentage()

  return (
    <div ref={containerRef} className='bg-[conic-gradient(var(--tw-gradient-stops))] from-slate-900 via-purple-900 to-slate-900 h-[300vh] overflow-clip relative'>
        <div className='sticky top-[0px] h-screen overflow-hidden'>
            <div className='w-full flex flex-col items-center overflow-x-hidden bottom-0 pt-14'>
                <div className='animate-zoomIn opacity-0'>
                    <p style={{transform:`translateY(${100*percentage}px) scale(${1-percentage})`, opacity:`${1-percentage}`}} className={` text-gray-300 font-semibold text-center text-lg pt-5`}>Jorge Zerpa</p>
                </div>
                <div className='animate-zoomIn opacity-0'>
                    <h2 style={{transform:`translateY(${100*percentage}px) scale(${1-percentage})`, opacity:`${1-percentage}`}} className={` text-white font-black text-center text-3xl md:text-4xl lg:text-5xl pt-5 mb-5`}>Full Stack <br />Web Developer</h2>
                </div>
                <div className='animate-zoomIn2 opacity-0'>
                    <p style={{transform:`scale(${1-percentage})`, opacity:`${1-percentage}`}} className={` text-gray-100 font-semibold text-md max-w-[420px] text-center`}>I love to help people and solve problems, and coding satisfy both necessities.</p>
                </div>
                <div className='pt-8 animate-bounce2 opacity-0'>
                    <svg style={{transform:`scale(${percentage>.05?0:1})`}} width="50" height="50" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.9999 12.5749C11.8666 12.5749 11.7416 12.5539 11.6249 12.5119C11.5082 12.4706 11.3999 12.3999 11.2999 12.2999L6.69989 7.69994C6.51656 7.5166 6.42089 7.28727 6.41289 7.01194C6.40423 6.73727 6.49989 6.49994 6.69989 6.29994C6.88323 6.1166 7.11656 6.02494 7.39989 6.02494C7.68323 6.02494 7.91656 6.1166 8.09989 6.29994L11.9999 10.1749L15.8999 6.29994C16.0832 6.1166 16.3122 6.0206 16.5869 6.01194C16.8622 6.00394 17.0999 6.09994 17.2999 6.29994C17.4832 6.48327 17.5749 6.7166 17.5749 6.99994C17.5749 7.28327 17.4832 7.5166 17.2999 7.69994L12.6999 12.2999C12.5999 12.3999 12.4916 12.4706 12.3749 12.5119C12.2582 12.5539 12.1332 12.5749 11.9999 12.5749ZM11.9999 18.5749C11.8666 18.5749 11.7416 18.5539 11.6249 18.5119C11.5082 18.4706 11.3999 18.3999 11.2999 18.2999L6.69989 13.6999C6.51656 13.5166 6.42089 13.2873 6.41289 13.0119C6.40423 12.7373 6.49989 12.4999 6.69989 12.2999C6.88323 12.1166 7.11656 12.0249 7.39989 12.0249C7.68323 12.0249 7.91656 12.1166 8.09989 12.2999L11.9999 16.1749L15.8999 12.2999C16.0832 12.1166 16.3122 12.0206 16.5869 12.0119C16.8622 12.0039 17.0999 12.0999 17.2999 12.2999C17.4832 12.4833 17.5749 12.7166 17.5749 12.9999C17.5749 13.2833 17.4832 13.5166 17.2999 13.6999L12.6999 18.2999C12.5999 18.3999 12.4916 18.4706 12.3749 18.5119C12.2582 18.5539 12.1332 18.5749 11.9999 18.5749Z" fill="rgb(200,20,20)"/>
                    </svg>
                </div>
            </div>
            <div className='w-full flex justify-center absolute bottom-0 overflow-hidden animate-planet'>
                <div className='animate-pulseSlow'>
                    <div 
                        style={{
                            transform:`scale(${1+(percentage/2)})`, 
                            backgroundImage:'url(images/planet1.png)', 
                            backgroundPosition:`${-600*percentage}px`, 
                        }} 
                        className='shadow-gray-300 shadow-inner bg-no-repeat w-[500px] h-[500px] overflow-hidden rounded-full relative top-[250px] flex-shrink-0'
                    >
                    </div>
                </div>
            </div>
        </div>
        <div className='absolute bottom-0 w-full'>
            <img width={3000} src="images/waves.png" alt="" className='min-w-[2000px]'  />
        </div>
    </div>
  )
}



import React from 'react'
import { useInView } from 'react-intersection-observer'
import { Link } from 'react-router-dom'

export const Portfolio = () => {
  const { ref:refS1, inView:inViewS1 } = useInView({ threshold: .5, triggerOnce:true })
  const { ref:refS2, inView:inViewS2  } = useInView({ threshold: .5, triggerOnce:true })

  return (
    <>
      <h2 id="portfolio" className="text-gray-900 font-black text-center text-3xl md:text-4xl lg:text-5xl mb-10 md:mt-36 mt-20">My Portfolio</h2>
      <section ref={refS1} className={`${inViewS1 && 'animate-scaleX'} opacity-0 origin-left w-full flex flex-col md:flex-row min-h-[50vh]`}>
            <div className="flex-1 flex justify-center items-start md:items-center">
              <div className="inline-block px-6">
                  <h2 className="text-gray-900 text-center md:text-left font-black text-2xl lg:text-3xl mb-5">Personal Projects</h2>
                  <p className="text-gray-500 text-center md:text-left font-semibold text-md max-w-[420px]">
                    A list of my top projects, pages, web apps, plugins and some games. Hope you enjoy it.                  
                  </p>
                  <Link to={'/personalProjects'} className="flex justify-center md:justify-start">
                    <div className="hover:scale-105 hover:shadow-md hover:shadow-gray-700 mt-5 inline-block bg-blue-900 text-white px-4 py-2 font-bold rounded-lg">see projects</div>
                  </Link>
              </div>
          </div>
          <div className="mr-0 md:mr-2 rounded-xl border-[3px] flex-1 min-h-[300px] mt-5 sm:md-0 flex justify-center items-center py-14 md:py-0 bg-center bg-no-repeat bg-cover" style={{ backgroundImage: `url('/images/personalProjects.png')` }}>
      
          </div>
      </section>
      <section ref={refS2} className={`${inViewS2 && 'animate-scaleX'} opacity-0 origin-right w-full flex flex-col md:flex-row min-h-[50vh]`}>
          <div className="min-h-[300px] mt-5 sm:md-0 rounded-xl ml-0 md:ml-2 flex-1 flex justify-center items-center py-14 md:py-0 bg-center bg-no-repeat bg-cover" style={{ backgroundImage: `url('/images/codepen.png')`}}>
  
          </div>
          <div className="flex-1 flex justify-center items-start md:items-center">
              <div className="inline-block px-6">
                  <h2 className="text-center md:text-left mt-20 md:mt-0 text-gray-900 font-black text-2xl lg:text-3xl mb-5">Art & animations</h2>
                  <p className="text-center md:text-left text-gray-500 font-semibold text-md max-w-[420px]">
                  In my free time, I love to do some creative coding, feel free to take a look and use any piece on your projects if you like it.                    
                  </p>
                  <div className="flex justify-center md:justify-start ">
                    <a href="https://codepen.io/zerpa_code" target='blank' className="hover:scale-105 hover:shadow-md hover:shadow-gray-700 mt-5 inline-block bg-blue-900 text-white px-4 py-2 font-bold rounded-lg">see on codepen</a>
                  </div>
              </div>
          </div>
      </section>
    </>
  )
}

import React, { useEffect, useState } from 'react'
import { personalProjects } from '../constants/projects'
import { getProjects } from '../services/blogAPI'

export const PersonalProjects = () => {
    const [projects, setProjects] = useState([])
    useEffect(()=>{window.scrollTo({top:0})},[])
    useEffect(()=>{
        (async()=>{
            const result = await getProjects()
            setProjects(result)
        })()
        
    },[])

    return (
    <div>
        <div className='bg-gradient-to-b from-blue-500 to-blue-900 py-12 shadow-black shadow-xl rounded-b-[20%] sm:rounded-b-full mb-20 sm:mb-10'>
            <h2 className="text-white font-black text-center text-3xl md:text-4xl lg:text-5xl mb-5 mt-3">Personal Projects</h2>
            <div className="w-full flex justify-center">
                <p className="px-5 max-w-[500px] text-center mt-2 text-md font-semibold text-gray-100">
                    Interfaces, APIs, Mobile Apps, and some "Sunday-made" games. Here you can see my top personal projects.
                </p>
            </div>
        </div>
        <div className="w-full mt-10">
            {projects.length>0 && projects.map((project, index)=>(
              <section key={"portProjects"+project.project+index} className={`shadow-black shadow-lg border-gray-200 border-2 border-b-gray-500 border-b-2 w-[90vw] rounded-xl mx-auto mb-20 p-10 flex gap-5 sm:gap-0 flex-wrap ${index%2!==0 && 'flex-row-reverse'}`}>
                  <div className="w-full sm:w-[50%] h-[400px]  flex flex-col justify-center items-center gap-4">
                      <h3 className="text-gray-900 font-black text-2xl lg:text-3xl mb-3">{project.title}</h3>
                      <p className="max-w-[500px] text-center mt-2 text-sm font-semibold text-gray-800">{project.description}</p>
                      <div className="mt-3 flex gap-2">
                          { project.github.length > 0 && (<a className='px-2 sm:px-5 py-3 bg-blue-800 text-white font-bold rounded-lg shadow-gray-500 shadow-lg text-sm sm:text-baseº hover:scale-105' href={project.github}>Github</a>) }
                          { project.link.length > 0 && (<a className='px-2 sm:px-5 py-3 bg-blue-800 text-white font-bold rounded-lg shadow-gray-500 shadow-lg text-sm sm:text-baseº hover:scale-105' href={project.project}>see Project</a>) }
                          { (project.github.length === 0 && project.link.length === 0) && (<div className='px-5 py-3  text-gray-700 font-bold rounded-lg' href={project.github}>
                                coming soon!
                          </div>) }
                      </div>
                  </div>
                  <div className="rounded-3xl border-gray-200 border-[2px] w-full sm:w-[50%] h-[300px] bg-center bg-no-repeat bg-cover" style={{backgroundImage:`url("/images/${project.image}")`}}></div>
                  {/* <div className="rounded-3xl border-gray-200 border-[2px] w-full sm:w-[50%] h-[300px] bg-center bg-no-repeat bg-cover" style={{backgroundImage:`url("https://uploads-ssl.webflow.com/589ed0903452732276fe0a7f/5c82323817fa41c2faa495aa_Daniel-Korpai-Portfolio.png")`}}></div> */}
              </section>
            ))}
        </div>
    </div>
  )
}

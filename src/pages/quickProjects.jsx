import React, { useEffect, useState } from 'react'
import { getQuickProjects } from '../services/blogAPI'

export const QuickProjects = () => {
    const [projects, setProjects] = useState([])
    useEffect(()=>{window.scrollTo({top:0})},[])
    useEffect(()=>{
        (async()=>{
            const result = await getQuickProjects()
            setProjects(result)
        })()
        
    },[])
    console.log(projects)

    return (
    <div className='px-4'>
        <div className='bg-gradient-to-b from-blue-500 to-blue-900 py-12 shadow-gray-400 shadow-lg rounded-b-[10%] sm:rounded-2xl mb-32 sm:mb-10'>
            <h2 className="text-white font-bold text-center text-3xl md:text-4xl lg:text-5xl mb-5 mt-3">Quick Projects</h2>
            <div className="w-full flex justify-center">
                <p className="px-5 max-w-[500px] text-center mt-2 text-md font-semibold text-gray-100">
                    Here you can find some "sunday made" projects. Crazy UI ideas, fast landing pages, web games and more.
                </p>
            </div>
        </div>
        <div className="w-full mt-10 flex flex-wrap justify-center gap-14">
            {projects.length>0 && projects.map((project, index)=>(
                <div key={"portProjects"+project.project+index}>
                    <div className="max-w-sm rounded overflow-hidden shadow-lg">
                        <img className="w-full" src={project.image} alt="Sunset in the mountains" />
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">{project.title}</div>
                            <p className="text-gray-700 text-base">
                            {project.description}
                            </p>
                        </div>
                        <div className='flex w-full justify-end items-center gap-4 pr-5 mb-5'>
                            { project.link && <a href={project.link} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">see</a> }
                            { project.github && <a href={project.github} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">github</a> }
                        </div>
                        <div className="px-6 pt-4 pb-2">
                        {project.stack.split(',').map((tecnology, i)=>(
                            <span key={tecnology+i+index} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{tecnology}</span>
                        ))}
                        </div>
                     </div>
                </div>
            ))}
        </div>
    </div>
  )
}

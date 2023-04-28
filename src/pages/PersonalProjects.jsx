import React, { useEffect, useState } from 'react'
import { getProjects } from '../services/blogAPI'
import { BallTriangle } from 'react-loader-spinner'
import { MdOutlineArrowBack } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'

export const PersonalProjects = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [projects, setProjects] = useState([])
    const navigate = useNavigate()

    useEffect(()=>{window.scrollTo({top:0})},[])
    useEffect(()=>{
        (async()=>{
            const result = await getProjects()
            setProjects(result)
            setIsLoading(false)
        })()
        
    },[])

    return (
    <div className='px-4'>
        <div className='w-full h-[60px] flex justify-start items-center'>
            <MdOutlineArrowBack size={50} onClick={()=>navigate('/')} />
        </div>
        <div className='bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 py-12 shadow-gray-400 shadow-lg rounded-[10%] sm:rounded-2xl mb-32 sm:mb-10'>
            <h2 className="text-white font-bold text-center text-3xl md:text-4xl lg:text-5xl mb-5 mt-3">Projects</h2>
            <div className="w-full flex justify-center">
                <p className="px-5 max-w-[500px] text-center mt-2 text-md font-semibold text-gray-100">
                    Interfaces, APIs, Mobile Apps... Here you can see my full stack projects.
                </p>
            </div>
        </div>
        <div className="w-full mt-10 flex flex-wrap justify-center gap-14">
            { isLoading && <div className='w-full h-[200px] flex justify-center items-center mb-[100vh]'>
                <BallTriangle
                    height={100}
                    width={100}
                    radius={5}
                    ariaLabel="ball-triangle-loading"
                    wrapperClass={{}}
                    wrapperStyle=""
                    visible={true}
                    color='rgb(147 51 234)'
                />
            </div> }
            {projects.length>0 && projects.map((project, index)=>(
                <div key={"portProjects"+project.project+index} className="mb-20">
                    <div className="max-w-sm rounded overflow-hidden shadow-lg">
                        <img className="w-full" src={project.image} alt="Sunset in the mountains" />
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">{project.title}</div>
                            <p className="text-gray-700 text-base">
                            {project.description}
                            </p>
                        </div>
                        <div className='flex w-full justify-end items-center gap-4 pr-5 mb-5'>
                            { project.link && <a href={project.link} className="bg-purple-700 hover:bg-purple-900 text-white font-bold py-2 px-4 rounded">see</a> }
                            { project.github && <a href={project.github} className="bg-purple-700 hover:bg-purple-900 text-white font-bold py-2 px-4 rounded">github</a> }
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

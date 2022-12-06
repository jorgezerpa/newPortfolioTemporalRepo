import React from 'react'
import { personalProjects } from '../constants/projects'

export const PersonalProjects = () => {
  return (
    <div>
        <h2 className="text-gray-900 font-black text-center text-3xl md:text-4xl lg:text-5xl mb-5 mt-3">Personal Projects</h2>
        <div className="w-full flex justify-center">
            <p className="max-w-[500px] text-center mt-2 text-md font-light text-gray-800">
                Interfaces, APIs, Mobile Apps, and some "Sunday-made" games. Here you can see my top personal projects.
            </p>
        </div>
        <div className="w-full mt-10">
            {personalProjects.map((project, index)=>(
              <section key={"portProjects"+project.project+index} className={`w-full flex flex-wrap ${index%2!==0 && 'flex-row-reverse'}`}>
                  <div className="w-full sm:w-[50%] h-[400px]  flex flex-col justify-center items-center gap-4">
                      <h3 className="text-gray-900 font-black text-2xl lg:text-3xl mb-3">{project.title}</h3>
                      <p className="max-w-[500px] text-center mt-2 text-sm font-light text-gray-800">{project.description}</p>
                      <div className="mt-3 flex gap-2">
                          { project.github.length > 0 && (<a className='px-5 py-3 bg-blue-800 text-white font-bold rounded-lg shadow-gray-500 shadow-lg hover:scale-105' href={project.github}>Github</a>) }
                          { project.project.length > 0 && (<a className='px-5 py-3 bg-blue-800 text-white font-bold rounded-lg shadow-gray-500 shadow-lg hover:scale-105' href={project.project}>see Project</a>) }
                          { (project.github.length === 0 && project.project.length === 0) && (<div className='px-5 py-3  text-gray-700 font-bold rounded-lg' href={project.github}>
                                coming soon!
                          </div>) }
                      </div>
                  </div>
                  <div className="rounded-3xl border-gray-200 border-[2px] w-full sm:w-[50%] h-[400px] bg-center bg-no-repeat bg-cover" style={{backgroundImage:`url("/images/${project.image}")`}}></div>
              </section>
            ))}
        </div>
    </div>
  )
}

import React from 'react'

let skills = ['react', 'next','node','tailwindCSS','materialUI','Bootstrap', 'react native','laravel','wordpress', 'figma']

export const About = () => {
  return (
    <>
      <section className="w-full flex flex-col md:flex-row min-h-[70vh] mt-14 py-14">
          <div className="w-full h-full flex flex-col justify-center items-center">
              <div className="w-[200px] h-[200px] bg-blue-300 rounded-[50%] mb-2 bg-center bg-no-repeat bg-cover" style={{ backgroundImage:`url('/images/profile.jpg')` }} ></div>
              <p className="text-gray-500 font-semibold text-md max-w-[400px]">
              Hello! I'm Jorge, a full stack web developer. I can help you in your projects with the construction of Web applications, working from the initial design to production and maintenance. I specialize in the frontend area, although I can develop complete applications that range from eCommerce to incredible personal portfolios to specific tools for your business or occupation. Whatever you need! ask for it and I build it.
              </p>
          </div>
      </section>
      <section className="w-full mt-10">
          <h2 className="text-gray-900 font-black text-2xl lg:text-3xl mb-10 text-center">Skills & technologies</h2>
          <div className='flex w-full justify-center'>
            <ul className="max-w-[800px] flex justify-center gap-4 flex-wrap" id="skillsGrid">
              {skills.map((skill, index)=>(
                  <li key={'skills'+skill+index} className="rounded-xl w-[120px] h-[50px] bg-blue-700 text-white border-lg shadow-lg shadow-gray-800">
                      <div className="font-bold w-full h-full flex justify-center items-center">{skill}</div>
                  </li>
              ))}
            </ul>
          </div>
      </section>
    </>
  )
}

import React from 'react'

export const Contact = () => {
  return (
    <div className='flex flex-col items-center mt-20'>
        <h2 className="text-gray-900 font-black text-center text-3xl md:text-4xl lg:text-5xl">Contact me</h2>
        <section className="max-w-[800px] w-full flex flex-col md:flex-row min-h-[70vh]">
            <div className="flex-1 flex justify-center items-start md:items-center">
                <div className="inline-block">
                    <a target='black' href="https://www.linkedin.com/in/jorge-zerpa-code/" className="flex gap-1 mt-2 font-bold rounded-lg">
                        <span><img width="30px" src="/icons/linkedin.png" alt="" /></span>
                        jorge-zerpa-code
                    </a>
                    <a target='black' href="https://www.instagram.com/zerpa.code/" className="flex gap-1 mt-2 font-bold rounded-lg">
                        <span><img width="30px" src="/icons/instagram.png" alt="" /></span>
                        @zerpa.code
                    </a>
                    <a target='black' href="#" className="flex gap-1 mt-2 font-bold rounded-lg">
                        <span><img width="30px" src="/icons/email.png" alt="" /></span>
                        contact@zerpacode.com
                    </a>
                    <a target='black' href="https://api.whatsapp.com/send/?phone=584126436269&text&type=phone_number&app_absent=0" className="flex gap-1 mt-2 font-bold rounded-lg">
                        <span><img width="30px" src="/icons/whatsapp.png" alt="" /></span>
                        +58 412 643 6269
                    </a>
                </div>
            </div>
            <div className="flex-1 flex justify-center items-center py-14 md:py-0">
                <div className="w-[200px] h-[200px] rounded-[50%]">
                    <div className="w-full flex justify-center">
                        <img width="90px" src="../public/icons/medium.png" alt="" />
                    </div>
                    <p className="text-center font-bold mt-2 text-gray-800">I also love to write, you can see my articles about coding on Medium</p>
                    <div className="mt-2 flex justify-center">
                        <a href="https://medium.com/@jorgelzd181102" target='black' className="rounded-xl py-2 px-5 font-bold bg-blue-700 mt-2 text-white">See my articles</a>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

import { useState } from 'react'
import Data from '../data/Experience'

function Skills() {
    const [data] = useState(Data)
  return (
    <div className="container mt-12 flex justify-between items-center mx-auto p-8 md:px-14 lg:px-52 w-full" >
      <section className='w-full'>
        <h2  className='font-bold text-3xl before:block before:w-12 before:h-2 before:bg-teal-400 before:rounded-full before:mb-1 uppercase tracking-wider'>EXPERIENCE</h2>
    
        <div className='flex justify-center '>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 mt-8">
                {data.map((experience) => {
                    return (
                        <div key={experience.id} className="relative md:w-32 md:h-32 w-28 h-28 rounded-full">
                            <div 
                                className="
                                absolute 
                                -inset-0.5 
                                bg-gradient-to-r
                                from-teal-600
                                to-blue-600 
                                rounded-full 
                                blur-sm
                                opacity-100 
                                " 
                                >
                            </div>
                            <div className="dark:bg-body bg-nav dark:text-teal-200 text-teal-50 md:w-32 md:h-32 w-28 h-28 rounded-full relative flex items-center justify-center">
                                <div className="text-5xl flex-col text-center">
                                    <ion-icon name={experience.icon}></ion-icon>
                                    <h1 className="text-sm text-center uppercase tracking-wider font-semibold">{experience.name}</h1>
                                </div>
                            </div>
                        </div>
                    )
                })}



                
            </div>
        </div>

      </section>

    </div>
  )
}

export default Skills
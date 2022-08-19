import { useState } from 'react'
import Fade from 'react-reveal/Fade'
import Jump from 'react-reveal/Jump'

import Data from '../data/Experience'

function Skills() {
    const [data] = useState(Data)
  return (
    <div className="container mt-12 flex justify-between items-center mx-auto p-8 md:px-14 lg:px-52 w-full" >
      <section className='w-full'>
        <Jump left cascade>
            <h2 className='font-bold text-3xl before:block before:w-12 before:h-2 before:bg-blue-500 before:rounded-full before:mb-1 uppercase tracking-wider'>EXPERIENCE</h2>
        </Jump>
        <Fade bottom cascade>
            <div className='flex justify-center '>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 mt-8">
                    {data.map((experience) => {
                        return (
                            <div key={experience.id} className="relative md:w-32 md:h-32 w-28 h-28 rounded-full">
                                <div 
                                    className="
                                    dark:absolute 
                                    dark:-inset-0.5 
                                    dark:bg-gradient-to-r
                                dark:from-teal-400
                                dark:to-blue-400 
                                    dark:rounded-full 
                                    dark:blur-sm
                                    dark:opacity-100 
                                    drop-shadow-md
                                    " 
                                    >
                                </div>
                                <div className="dark:bg-body bg-nav dark:text-blue-200 text-white md:w-32 md:h-32 w-28 h-28 rounded-full dark:relative flex items-center justify-center">
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
        </Fade>

      </section>

    </div>
  )
}

export default Skills
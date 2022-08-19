import { useState } from 'react'
import Fade from 'react-reveal/Fade'
import Data from '../data/Projects'

function Project() {
   const [data] = useState(Data)
  return (
   <Fade bottom cascade>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8'>
         
         {data.map((project) => {
            return (
               
               <div key={project.id} className="border-2 max-w-md mx-auto md:max-w-2xl min-w-0 break-words bg-white w-full mb-6 hover:shadow-lg rounded-xl drop-shadow-lg">
         
                  <div className="flex flex-wrap justify-center">
                     <div className="w-full text-center mt-8">
                        <div className="flex justify-center  pb-0">
                           <div className="p-3 text-center text-xl font-bold block uppercase tracking-wide text-black">
                              <ion-icon name="logo-html5" size='large'></ion-icon>
                           </div>
                           <div className="p-3 text-center text-xl font-bold block uppercase tracking-wide text-black">
                              <ion-icon name="logo-css3" size='large'></ion-icon>
                           </div>
                           <div className="p-3 text-center text-xl font-bold block uppercase tracking-wide text-black">
                              <ion-icon name="logo-react" size='large'></ion-icon>
                           </div>
                        </div>
                     </div>
                     </div>
      
                     <div className="text-center mt-2">
                        <h3 className="text-2xl text-body font-bold leading-normal mb-1">{project.name}</h3>
                     </div>
      
                     <div className="mt-6 py-6 border-t border-slate-200 text-center">
                     <div className="flex flex-wrap justify-center">
                        <div className="w-full px-4">
                           <p className="font-light leading text-slate-600 mb-4">
                              {project.description}
                           </p>
                           <a href={project.url} 
                              className="flex justify-center font-semibold text-black hover:text-slate-400"
                              target='_blank' rel='noreferrer'
                           >
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                 <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                              </svg>
                              <span>Visit</span>
                           </a>
                        </div>
                     </div>
                  </div>
         
               </div>
            )
         })}



      </div>
   </Fade>
  )
}

export default Project
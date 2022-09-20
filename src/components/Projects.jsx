import Jump from 'react-reveal/Jump'

import Project from "./Project"


function Projects() {
  return (
    <div className="container flex justify-between items-center md:mt-0 mt-64 mx-auto px-8 md:px-14 lg:px-52 w-full">
      <section className='w-full'>
        <Jump left cascade>
          <h2 className='font-bold text-3xl before:block before:w-12 before:h-2 before:bg-blue-500 before:rounded-full before:mb-1 uppercase tracking-wider'>Previous Works</h2>
        </Jump>
    
        <div className=''>
          <Project />
        </div>

      </section>

    </div>
  )
}

export default Projects
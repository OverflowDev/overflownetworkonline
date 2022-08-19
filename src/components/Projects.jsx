import Project from "./Project"

function Projects() {
  return (
    <div className="container mt-12 md:mt-96 flex justify-between items-center mx-auto px-8 md:px-14 lg:px-52 w-full">
      <section className='w-full'>
        <h2 className='font-bold text-3xl before:block before:w-12 before:h-2 before:bg-teal-400 before:rounded-full before:mb-1 uppercase tracking-wider'>Previous Works</h2>
    
        <div className=''>
          <Project />
        </div>

      </section>

    </div>
  )
}

export default Projects
import Overflow from '../assets/images/overflow.png'

function Hero() {
  return (
    <div 
      className='container mt-8 flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full' id='home'
    >
      <div className='flex flex-wrap md:flex-nowrap'>

        {/* Dot or Social Icons  */}
        <nav className="mr-48 lg:w-4 fixed left-[5%] hidden xl:block">
          <div className="absolute left-[50%] transform -tanslate-x-1/2 space-y-6 mt-36 ">
            
            <a href='/' className='block text-4xl dark:text-nav dark:hover:text-white text-teal-800'>
                <ion-icon name="logo-linkedin"></ion-icon>
            </a>
            <a href='/' className='block text-4xl dark:text-nav dark:hover:text-white text-teal-800'>
                <ion-icon name="logo-twitter"></ion-icon>
            </a>
            <a href='/' className='block text-4xl dark:text-nav dark:hover:text-white text-teal-800'>
                <ion-icon name="logo-github"></ion-icon>
            </a>

          </div>
        </nav>
        {/* Dot or Social Icons  */}
        
        {/* Text  */}
        <div 
          className='flex flex-wrap justify-center md:justify-start max-w-xl mt-0 md:my-36 lg:ml-36'
          >
            <h1 className='font-bold text-5xl md:text-6xl lg:text-7xl text-center md:text-left'>
              Hi, I'm <span className='uppercase text-teal-500'>Overflow</span><br></br>
              <span className='text-4xl'> I am a web developer</span>
            </h1>
            <div className='flex justify-center md:justify-start w-full'>
              <button className='px-8 py-4 bg-teal-700 text-white font-semibold mt-12 flex items-center space-x-3'>
                <div>
                  <ion-icon name="document"></ion-icon>
                </div>
                <span className='uppercase tracking-wider'>My Resume</span>
              </button>
            </div>
        </div>
        {/* Text  */}

        {/* Image  */}
        <img src={Overflow} alt="Overflow" className='md:w-4/6 md:absolute -mt-4 md:mt-0 md:right-0  z-10' />    

      </div>
    </div>
  )
}

export default Hero
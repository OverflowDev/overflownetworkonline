import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';

function Hero() {
  return (
    
    <div 
      className='container flex justify-between mt-32 md:mt-24 mx-auto px-4 md:px-14 lg:px-24 h-screen'
    >
      <div className='flex flex-wrap md:flex-nowrap'> 

        {/* Dot or Social Icons  */}
        <Slide left cascade>
          <nav className="mr-48 lg:w-4 fixed left-[5%] hidden xl:block">
            <div className="absolute left-[50%] transform -tanslate-x-1/2 space-y-6 mt-36 ">
              
              <a href='https://www.linkedin.com/in/adeyemi-adetomiwa-789281125/' 
                className='block text-4xl dark:text-nav dark:hover:text-white text-blue-800' 
                target='_blank' rel='noreferrer'
                >
                  <ion-icon name="logo-linkedin"></ion-icon>
              </a>
              <a href='https://twitter.com/ade_overflow' 
                className='block text-4xl dark:text-nav dark:hover:text-white text-blue-800'
                target='_blank' rel='noreferrer'
                >
                  <ion-icon name="logo-twitter"></ion-icon>
              </a>
              <a href='https://github.com/OverflowDev' 
                className='block text-4xl dark:text-nav dark:hover:text-white text-blue-800'
                target='_blank' rel='noreferrer'
              >
                  <ion-icon name="logo-github"></ion-icon>
              </a>

            </div>
          </nav>
        </Slide>
        {/* Dot or Social Icons  */}
        
        {/* Text  */}
        <div 
          // className='flex flex-wrap justify-center'
          >
            <div className="flex flex-wrap justify-center">
              <h1 className='font-bold text-7xl text-center dark:text-blue-50 text-black'>
                Hi, I am 
                <span className='uppercase dark:text-blue-500 text-blue-900 text-center text-6xl md:text-8xl lg:text-9xl'>
                  <Fade left cascade>
                      Overflow
                  </Fade>
                </span>
              </h1>
              <div>
                <Fade left cascade>
                  <h1 className='text-2xl text-center p-2 font-semibold dark:text-blue-200 text-blue-900'> Front-End Developer</h1>
                </Fade>
                <p className='leading-8 px-16 font-light text-center tracking-wide'>
                  "A designer knows he has achieved perfection not when there is nothing left to add, but when there is nothing left to take away." - Antoine de Saint-Exupéry
                </p>
              </div>
            </div>
            
            <div className='flex justify-center'>
              <button className='px-8 py-4 bg-blue-800 text-white font-semibold mt-8 flex items-center space-x-2'>
                <div>
                  <ion-icon name="document"></ion-icon>
                </div>
                <span className='uppercase tracking-wider'>Coming Soon</span>
              </button>
            </div>
        </div>
        {/* Text  */}

      </div>
    </div>
  )
}

export default Hero
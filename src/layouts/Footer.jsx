import Mail from "../components/Mail"

function Footer() {
  return (
    <footer className="flex flex-col justify-center items-center dark:text-white dark:bg-veryDarkBlue bg-blue-100 mt-12 p-4 relative">
      
       <div className='md:bottom-0 md:right-0 bottom-12 right-0 p-4 fixed z-10 '>
          <Mail />
        </div>

      <div className="text-center leading-3 tracking-widest">
         OverFlow - © 2022 Copyright 
      </div>

      <div className="container mt-2 md:hidden">
        <div className="">
          <div className="flex justify-center space-x-6 items-center text-3xl">
            <a href="https://www.linkedin.com/in/adeyemi-adetomiwa-789281125/">
                <ion-icon name="logo-linkedin"></ion-icon>
            </a>
            <a href="https://twitter.com/ade_overflow">
                <ion-icon name="logo-twitter"></ion-icon>
            </a>
            <a href="https://github.com/OverflowDev">
                <ion-icon name="logo-github"></ion-icon>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
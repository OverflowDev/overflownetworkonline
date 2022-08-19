import Mail from "../components/Mail"

function Footer() {
  return (
    <footer className="flex justify-center items-center dark:text-white dark:bg-veryDarkBlue bg-teal-100 mt-12 p-4 relative">
      {/* <div className="container p-2">
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
      </div> */}
       <div className=' bottom-0 right-0 p-4 fixed z-10'>
          <Mail />
        </div>


      <div className="text-center leading-3 tracking-widest">
         OverFlow - © 2022 Copyright 
      </div>
    </footer>
  )
}

export default Footer
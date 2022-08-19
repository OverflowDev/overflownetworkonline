import {useEffect, useState} from 'react'

function Navbar() {
    const [theme, setTheme] = useState(localStorage.theme)
    // const [theme, setTheme] = useState('dark')
    const colorTheme = theme === 'dark' ? 'light' : 'dark'
    
    useEffect(() => {
        const rootElement = window.document.documentElement

        rootElement.classList.remove(colorTheme)
        rootElement.classList.add(theme)
        // optional 
        localStorage.setItem('theme', theme)

    }, [theme, colorTheme])

  return (
    <div className='flex justify-between items-center p-8'>
        <div>
            <h1 className='font-semibold font-rubik'>OVERFLOW <span className='text-teal-500'>NETWORK</span> </h1>
        </div>
        <button 
            className='dark:text-teal-50'
            onClick={() => setTheme(colorTheme)}
        >
            <ion-icon name="contrast-sharp" size='large'></ion-icon>
        </button>
    </div>
  )
}

export default Navbar
import React from 'react'

function Mail() {

  return (
    <div className='text-4xl dark:text-blue-500 text-blue-900'>
        <a href="mailto:adeyemiadetomiwa.dev@gmail.com" target='_blank' rel='noreferrer'>
            <ion-icon name="mail-unread"></ion-icon>
        </a>
    </div>
  )
}

export default Mail
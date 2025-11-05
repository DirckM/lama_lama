import React from 'react'

function FutureProject() {
  return (
    <section id='future-projects' className='w-full bg-black h-full flex flex-col justify-center items-center px-10 relative z-20'>
        <div className='flex flex-col justify-center items-center pt-20 w-full'>
            <h2 className='text-[#D7F3F5] text-6xl font-bold'>Future</h2>
            <h2 className='text-[#D7F3F5] text-6xl font-great-vibes'>Projects</h2>
        </div>
        <div className='flex flex-col gap-2 p-20 max-w-8xl'>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
            <img className='rounded-2xl h-[40vh] object-cover w-full' src="images/adidas.webp" alt="shoe website" />
            <video className='rounded-2xl h-[40vh] object-cover w-full' 
              src="videos/jordans.mp4" 
              autoPlay
              loop
              muted
              playsInline
            />
            <video 
              className='rounded-2xl h-[40vh] object-cover w-full' 
              src="videos/shader-bitcoin.mp4" 
              autoPlay
              loop
              muted
              playsInline
            />
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4 w-full'>
          <video 
              className='rounded-2xl h-[40vh] object-cover w-full' 
              src="videos/keyboard-tool.mp4" 
              autoPlay
              loop
              muted
              playsInline
            />
            <img className='rounded-2xl h-[40vh] object-cover w-full' src="images/design-tool.webp" alt="shoe website" />
          </div>
        </div>
    </section>
  )
}

export default FutureProject
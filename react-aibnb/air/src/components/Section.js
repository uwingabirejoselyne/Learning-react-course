import React from 'react'

const Section = () => {
  return (
    <section className='container px-12 mt-32 space-y-5 '>
      <div className='flex justify-center 
      items-center'>
      <img src={process.env.PUBLIC_URL + "/grid.png"} className='max-w-lg object-cover '/>
      </div>
      <h1 className='text-3xl font-bold'>Online Experiences</h1>
      <p className=''>Join unique interactive activities led by 
     one-of-a-kind hosts—all without leaving home.</p>
    </section>
  )
}

export default Section

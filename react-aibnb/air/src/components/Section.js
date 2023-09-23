import React from 'react'

const Section = () => {
  return (
    <section className='px-12 mt-32 space-y-5'>
      <img src={process.env.PUBLIC_URL + "/image1.png"} className='max-w-md'/>
      <h1 className='text-3xl font-bold'>Online Experiences</h1>
      <p className='w-1/3'>Join unique interactive activities led by 
     one-of-a-kind hosts—all without leaving home.</p>
    </section>
  )
}

export default Section

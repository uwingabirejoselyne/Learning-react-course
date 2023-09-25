import React from 'react'
import {FaStar} from 'react-icons/fa'


const Card = (props) => {
  console.log(props.openSpots);
  return (
    <div className=' container'>
      <div>
        <div className='relative'>
      <img src={process.env.PUBLIC_URL + "/boy.png"} className='max-w-md'/>
      <button className='absolute top-2 py-3 px-9 left-3 bg-white rounded-sm'></button>
      </div>
      <div className="card--stats flex flex-row">
              <FaStar  className='text-red-500'/>
              <span>{props.rating}</span>
              <span>({props.reviewCount}) • </span>
              <span>{props.location}</span>
            </div>
            <p>{props.title}</p>
            <p>From ${props.price} / person</p>
      </div>
    </div>
  )
}

export default Card

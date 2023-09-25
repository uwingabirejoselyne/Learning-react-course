import React from 'react'
import {FaStar} from 'react-icons/fa'


const Card = (props) => {
  let badgeText
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.location === "Online") {
        badgeText = "ONLINE"
    }
  return (
    <div className=' container'>
      <div>
        <div className='relative'>
      <img src={process.env.PUBLIC_URL + "/boy.png"} className='max-w-md'/>
      {badgeText && <button className='absolute top-2 h-8 w-24 left-3 bg-white rounded-sm'>{badgeText }</button>}
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

import React from 'react'
import {FaStar} from 'react-icons/fa'


const Card = (props) => {
  let badgeText
    if (props.item.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.item.location === "Online") {
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
              <span>{props.item.rating}</span>
              <span>({props.item.stats.reviewCount}) • </span>
              <span>{props.item.location}</span>
            </div>
            <p>{props.item.title}</p>
            <p>From ${props.item.price}/ person</p>
      </div>
    </div>
  )
}

export default Card

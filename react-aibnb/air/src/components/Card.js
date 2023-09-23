import React from 'react'
import {FaStar} from 'react-icons/fa'


const Card = (props) => {
  console.log(props);
  return (
    <div className=' grid grid-cols-3 gap-2'>
      <div>
      <img src={process.env.PUBLIC_URL + "/boy.png"} className='max-w-md'/>
      <div className="card--stats">
              <FaStar />
              <span>{props.rating}</span>
              <span>({props. reviewCount}) • </span>
              <span>{props.country}</span>
            </div>
            <p>{props.title}</p>
            <p>From ${props.price} / person</p>
      </div>
    </div>
  )
}

export default Card

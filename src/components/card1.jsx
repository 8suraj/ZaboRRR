import React from 'react'

const Card1 = ({img,head,para}) => {
  return (
    <div className='card1'>
        <div className="card1__img">
            <img src={img} alt="" />
        </div>
        <div className="card1__body">
            <p>{head}</p>
            {para}
        </div>
    </div>
  )
}

export default Card1
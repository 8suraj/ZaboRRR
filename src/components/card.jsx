import React from 'react'

export const Card = ({content}) => {
    // console.log(content)
    // console.log(content.name)
    // console.log(content.content)
  return (
    <div className={`card ${content.class}`} data-name={content.header?content.header:content.name}>
        <div className='card-1' data-name={content.header?content.header:content.name}>
            <img src={content.icon} alt=""  />
        </div>
        <div className='card-2' data-name={content.header?content.header:content.name}>
            <span>{ content.header?content.header:content.name}</span><br/>
            {content.content}
        </div>
    </div>
  )
}


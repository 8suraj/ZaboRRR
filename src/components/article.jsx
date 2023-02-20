import React from 'react'

const Article = ({header,para}) => {
  return (
    <div className='article'>
        <span className="article__header">{header}</span>
        <p className="article__para">{para}</p>
    </div>
  )
}

export default Article
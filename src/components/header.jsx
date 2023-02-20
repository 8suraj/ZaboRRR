import React from 'react'

export const Header1 =({header,state})=>{
  let cl ;
  if(state){cl='active'}
  return (
    <div className={`header1 ${cl}`}>
       {header}
    </div>
  )
}

export const Header2 = ({header})=>{
  return (
    <div className='header2'>
       {header}
    </div>
  )
}


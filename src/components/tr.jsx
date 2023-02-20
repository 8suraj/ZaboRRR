import React from 'react'

export const Tr = ({item,itemPrice}) => {
    let content ;
    for (const i of itemPrice) {
        if(i.name ===item){content = i.content}
    }

  return (
    <>
    <tr>
        <td>
            {item}
        </td>
        <td>
           {content}
        </td>
    </tr>
    </>
  )
}


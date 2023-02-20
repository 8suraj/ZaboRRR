/* eslint-disable array-callback-return */
import { Header2 } from './header'
import {Card} from '../components/card'
export const ItemHolder = ({header,data,cat}) => {

  return (
    <div className='itemHolder' >
        {header&&<Header2  header={header} />}
        
        <div className='itemHolder__container'>
            {cat&&data.map((item)=>{if(item.cat===cat){ return <Card content={item}/>}})}
            {!cat&&data.map((item)=>{return <Card content={item}/>})}
        </div>
    </div>
  )
}


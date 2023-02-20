import React from 'react'
import log from '../../resource/log.svg'
import user from '../../resource/user1.svg'
import editSmall from '../../resource/editSmall.svg'
import Footer from '../../components/footer'
import { useNavigate } from 'react-router-dom'
export const Profile = () => {
    let his = useNavigate()
    const onchangehandler =()=>{
        his("/")
    }
  return (
    <>
   <div className="profile">
    <div className="profile__body">

        <div className="profile__body-1">
            <div className="profile__body-1-card">
                <img src={editSmall} alt="" className='editSmall'/>
                <img src={user} alt="" srcset="" />
                <span>Suraj Roy</span>
                <span>suraj@gmail.com</span>
                <span>8876890912</span>
            </div>
            <div className="profile__body-1-log" onClick={onchangehandler}>
                <img src={log} alt="" srcset="" />
                LOGOUT
            </div>
        </div>
        <div className="profile__body-2">
            <div className="profile__body-2-input">
                <span className='label'>Address Line 1</span>
                <span className='data'>Udayan Path</span>
            </div>
            <div className="profile__body-2-input">
                <span className='label'>Landmark</span>
                <span className='data'>near masjid</span>
            </div>
            <div className="profile__body-2-input">
                <span className='label'>House NO.</span>
                <span className='data'>2</span>
            </div>
            <div className="profile__body-2-input">
                <span className='label'>Pin Code</span>
                <span className='data'>781013</span>
            </div>
        </div>
    </div>
   </div>
   <Footer state={true}/>
   </>
  )
}


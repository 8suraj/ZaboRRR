import React, { useState } from 'react'
import user from '../../resource/user.svg'
import lock from '../../resource/formico/lock.svg'
import email from '../../resource/formico/email.svg'
import { Link } from "react-router-dom";
import { Button } from '../../components/button'
import validator from 'validator'
import { useNavigate } from "react-router-dom"
export const Login = () => {
    const [textInputEmail, setTextInputEmail] = useState('');
    const [password,setPassword] = useState('')
    const [emailError, setEmailError] = useState('');
    const [message, setMessage] = useState('');
    const [modalOpen, setModalOpen] = useState(false);
    const validateEmail = (e) => {
        const email = e;
        
        if (validator.isEmail(email)) {
            setEmailError(true);
        } else {
            setEmailError(false);
        }
    }
    const phoneNumberSet =()=>{

        localStorage.setItem('Email',textInputEmail)
    }
    const onChangeHandlerPhone =(e)=>{
        setTextInputEmail(e.target.value)
        validateEmail(textInputEmail);
    }
const onChangeHandlerPassword =(e)=>{
    setPassword(e.target.value)
    //  localStorage.setItem('time',e.target.value)
}
    const checkTextInput = () => {
    if (!emailError) {
      alert('Please Enter Email correctly.');
      return;
    }
    if (!password.trim()) {
      alert('Please Enter Time');
      return;
    }
    phoneNumberSet();
    logInHandler();
}
    let history = useNavigate()
    const logInHandler = ()=>{
            setMessage("Log in Successful ");
            history("/profile")
            localStorage.setItem('user',textInputEmail)
        }
  return (
    <div className='login'>
        
        <div className='login__body'>
            <div className='login__body--userIcon'>
                <img src={user} alt="" srcset="" />
            </div>

            <div className='login__body-1'>
                {/* <FontAwesomeIcon icon="fa-sharp fa-solid fa-user" /> */}
                {/* <div className='imgdiv'>
                    <img src={useri} alt="" />
                    <input type='text' placeholder='Full Name'/>
                </div> */}
                <div className='imgdiv'>
                    <img src={email} alt="" />
                    <input type='text' placeholder='Email' onChange={onChangeHandlerPhone}/>
                </div>
                <div className='imgdiv'>
                <img src={lock} alt="" />
                <input type='password' placeholder='Password' onChange={onChangeHandlerPassword}/>
                </div>
                <p>Don't Have a Account? <Link to='/createAccount'><span>SignUp</span></Link></p>

                <div className='btn-div' onClick={checkTextInput}>
                    <Button item="LOGIN"/>
                </div>
                
            </div>
           
        </div>
           
    </div>
  )
}


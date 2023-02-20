import React from 'react'
import user from '../../resource/user.svg'
import useri from '../../resource/formico/user.svg'
import phone from '../../resource/formico/phone.svg'
import email from '../../resource/formico/email.svg'
import { Button } from '../../components/button'
// import Popup from '../../components/popup/popup'
import validator from 'validator';
import lock from '../../resource/formico/lock.svg'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
export const CreateAccount = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [message, setMessage] = useState('');
    const [textInputName, setTextInputName] = useState('');
    const [textInputEmail, setTextInputEmail] = useState('');
    const [textInputPhone, setTextInputPhone] = useState('');
    const [textInputPassword, setTextInputPassword] = useState('');
    const [textInputCPassword, setTextInputCPassword] = useState('');
    const [textInputAddress, setTextInputAddress] = useState('');
    const [textInputLandMark, setTextInputLandMark] = useState('');
    const [textInputHouseNo, setTextInputHouseNo] = useState('');
    const [textInputPinCode, setTextInputPinCode] = useState('');
    const [textInputType, setTextInputType] = useState('');
    const [emailError, setEmailError] = useState('');
    const checkTextInput = () => {
    if (!textInputName.trim()) {
      alert('Please Enter Your Name');
      return;
    }
    if (!textInputPhone.trim()) {
      alert('Please Enter Phone Number');
      return;
    }
    if (!textInputPassword.trim()) {
      alert('Please Enter Password');
      return;
    }
    if (!textInputCPassword.trim()) {
      alert('Please Enter Re Enter Password');
      return;
    }
    if (!textInputAddress.trim()) {
      alert('Please Enter Address');
      return;
    }
    if (!textInputLandMark.trim()) {
      alert('Please Enter Land Mark');
      return;
    }
    if (!textInputHouseNo.trim()) {
      alert('Please Enter House Number');
      return;
    }
    if (!textInputPinCode.trim()) {
      alert('Please Enter Pincode');
      return;
    }
    if (!textInputType.trim()) {
      alert('Please Enter Resident Type');
      return;
    }
    if (!emailError) {
      alert('Please Enter Email correctly.');
      return;
    }
    createAccountHandler();
    setModalOpen(true);
    
  };
    const handleChangeName = (event) => {
    setTextInputName(event.target.value);
    };
    const handleChangeEmail = (event) => {
        setTextInputEmail(event.target.value);
        validateEmail(textInputEmail);
    };
    const handleChangePhone = (event) => {
        setTextInputPhone(event.target.value);
    };
    const handleChangePassword = (event) => {
        setTextInputPassword(event.target.value);
    };
    const handleChangeCPassword = (event) => {
        setTextInputCPassword(event.target.value);
    };
    const handleChangeAddress = (event) => {
        setTextInputAddress(event.target.value);
    };
    const handleChangeLandMark = (event) => {
        setTextInputLandMark(event.target.value);
    };
    const handleChangeHouseNo = (event) => {
        setTextInputHouseNo(event.target.value);
    };
    const handleChangePinCode = (event) => {
        setTextInputPinCode(event.target.value);
    };
    const handleChangeType = (event) => {
        setTextInputType(event.target.value);
    };
    const validateEmail = (e) => {
        const email = e;
        
        if (validator.isEmail(email)) {
            setEmailError(true);
        } else {
            setEmailError(false);
        }
    }
    const createAccountHandler = ()=>{
        console.log("sadasd")
        fetch("http://107.23.93.87/client/request",{
            method:'POST',
            mode:'cors',
            body:JSON.stringify()
        }).then((response)=>response.json())
        .then((data)=>{if(data.status==="success"){setMessage("Account Creation Successful ");}
        else{console.log("failed");
    setMessage("Account Creation Failed ");}
    } )

    }

  return (
    <div className='createAccount'>
        <div className='createAccount__userIcon'>
            <img src={user} alt="" srcset="" />
        </div>
        <div className='createAccount__body'>
            <div className='createAccount__body-1'>
                {/* <FontAwesomeIcon icon="fa-sharp fa-solid fa-user" /> */}
                <div className='imgdiv'>
                    <img src={useri} alt="" />
                    <input type='text' placeholder='Full Name' onChange={handleChangeName}/>
                </div>
                <div className='imgdiv'>
                    <img src={phone} alt="" />
                    <input type='text' placeholder='Phone Number' onChange={handleChangePhone}/>
                </div>
                <div className='imgdiv'>
                <img src={email} alt="" />
                <input type='text' placeholder='Email Address' onChange={handleChangeEmail}/>
                </div>
                 <div className='imgdiv'>
                <img src={lock} alt="" />
                <input type='password' placeholder='Password' onChange={handleChangePassword}/>
                </div>
                 <div className='imgdiv'>
                <img src={lock} alt="" />
                <input type='password' placeholder='Comfirm Password' onChange={handleChangeCPassword}/>
                </div>
            </div>
            <div className='createAccount__body-2'>
                
                        <div className="addressForm__body">
                            <input type="text" placeholder='Address line 1'  onChange={handleChangeAddress}/>
                            <input type="text" placeholder='Landmark' onChange={handleChangeLandMark}/>
                            <div>
                                <input type="text" placeholder='House No.' onChange={handleChangeHouseNo}/>
                            <div className='radio'>
                                <label for='Home'>Home</label>
                                <input type="radio" name='locationType' value='Home' onChange={handleChangeType}/>
                            </div>
                            <div className='radio'>
                                <label for='Work'>Work</label>
                                <input type="radio" name='locationType' value='Work' onChange={handleChangeType}/>
                            </div>
                            </div>
                            <input type="text" placeholder='Pin Code' onChange={handleChangePinCode}/>

                            </div>

            </div>
        </div>
        {modalOpen &&  alert(message)}
        <div className='createAccount-btn' onClick={checkTextInput}>
            <Button item="Create Account"/>

        </div>
            
    </div>
  )
}


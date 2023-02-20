import React from 'react'

const AddressForm = () => {
  return (
    <div className='addressFormContainer'>
        <section className='addressForm'>
            <div className='addressForm__header'>ADDRESS</div>
            <div className="addressForm__body">
                <input type="text" placeholder='Address line 1'/>
                <input type="text" placeholder='Landmark'/>
                <div>
                    <input type="text" placeholder='House No.'/>
                    <input type="radio" />
                </div>
                <input type="text" placeholder='Pin Code'/>
                <input type="submit" value='Save Address'/>
            </div>
        </section>
    </div>
  )
}

export default AddressForm
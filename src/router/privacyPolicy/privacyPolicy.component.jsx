import React from 'react'
import Article from '../../components/article'
import Footer from '../../components/footer'
import {Header1} from '../../components/header'
const Header ="Privacy Policy"
const data = [
    {
    header: 'Advance Network Protection and Response',
    para: 'Advance Network Protection and Response: An attack surface reduction feature that prevents users from accessing suspicious and known malicious network addresses.',
    },
  {
    header: 'Endpoint Detection and Response',
    para: 'Endpoint Detection and Response: EDR provides real-time continuous monitoring by combining a collection of endpoint data with rules-based automated response and analysis capabilities.',
  },]
const PrivacyPolicy = () => {
  return (
    <>
      <div className='privacyPolicy '>
            <Header1 header={Header} state={true}/>
            {data.map((item)=>(
                <Article header={item.header} para={item.para}/>
            ))}
      </div>
      <Footer state={true}/>
    </>
  )
}

export default PrivacyPolicy
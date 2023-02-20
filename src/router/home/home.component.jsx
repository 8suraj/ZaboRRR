import React from 'react'
import Hero from '../../components/hero';
import Footer from '../../components/footer';
import Card1 from '../../components/card1';
import sch from '../../resource/wrkProcess/sch.svg'
// import sch from '../../resource/wrkProcess/sch.svg'
import like from '../../resource/wrkProcess/like.svg'
import money from '../../resource/wrkProcess/money.svg'
import pick from '../../resource/wrkProcess/pick.svg'
import weigh from '../../resource/wrkProcess/weigh.svg'
import Api from '../../api/1';
// import money from '../../resource/wrkProcess/money.svg'
const list = [
  {
    img:sch,
    head:"SCHEDULE",
    para:'Go to our website “lalala.com” and click on the “Raise pickup” button and you will be forwarded to raise pickup page where you will need to raise a pickup'
  },
  {
    img:like,
    head:"BE READY",
    para:'Please keep the trash/scrap ready prior to our arrival on the scheduled date and time thereby not wasting valuable time of our customers.'
  },
  {
    img:pick,
    head:"PICK UP",
    para:'Our team will be available at your door step on the scheduled date or time for the trash or scrap pickup. '
  },
  {
    img:weigh,
    head:"WEIGHING",
    para:'Our team will further segragate your trash/scrap and weigh it infront of you as per our given scrap rate chart and calculate the amount.'
  },
  {
    img:money,
    head:"EARN MONEY",
    para:'After completing the weighing process and the amount is fixed, the team will pick the scrap and settle the payment by cash or online transaction then and there.'
  },

]
const Home = () => {
  return (
    <>
    <Hero/>
    <div className='homeCard'>
      {list.map((i)=>(<Card1 img={i.img} head={i.head} para={i.para}/>))}
      
    </div>
    <Footer state={true}/>
    <Api/>
    </>
  )
}

export default Home

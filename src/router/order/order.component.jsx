import React, { useState } from 'react'
import { Header1 } from '../../components/header'
import { ItemHolder } from '../../components/itemHolder'
import paper from '../../resource/ordericon/paper.svg'
import plastic from '../../resource/ordericon/plastic.svg'
import metal from '../../resource/ordericon/metal.svg'
import eWaste from '../../resource/ordericon/eWaste.svg'
import motor from '../../resource/ordericon/motor.svg'
import bike from '../../resource/ordericon/bike.svg'
import battery from '../../resource/ordericon/battery.svg'
import disp from '../../resource/ordericon/disp.svg'
import { Button } from '../../components/button'
import {Tr} from'../../components/tr'
import Footer from '../../components/footer'
//----------------------------------------------------------------------
import Fwheel from '../../resource/ordericon/sub/Fwheel.svg'
import cartoonBox from '../../resource/ordericon/sub/cartoonBox.svg'
import magazine from '../../resource/ordericon/sub/magazine.svg'
import notebook from '../../resource/ordericon/sub/notebook.svg'
import mixedCardBoard from '../../resource/ordericon/sub/mixedCardBoard.svg'
import textBook from '../../resource/ordericon/sub/textBook.svg'
import hardPlastic from '../../resource/ordericon/sub/hardPlastic.svg'
import pvc from '../../resource/ordericon/sub/pvc.svg'
import chair from '../../resource/ordericon/sub/chair.svg'
import softPlastic from '../../resource/ordericon/sub/softPlastic.svg'
import fibre from '../../resource/ordericon/sub/fibre.svg'
import waterTank from '../../resource/ordericon/sub/waterTank.svg'
import batteryBag from '../../resource/ordericon/sub/batteryBag.svg'
import tyre from '../../resource/ordericon/sub/tyre.svg'
import fridge from '../../resource/ordericon/sub/fridge.svg'
import WMmetalBody from '../../resource/ordericon/sub/WMmetalbody.svg'
import oven from '../../resource/ordericon/sub/oven.svg'
import electricWire from '../../resource/ordericon/sub/electricWire.svg'
import factoryDisposal from '../../resource/ordericon/sub/factoryDisposal.svg'
import machinaryItem from '../../resource/ordericon/sub/machineryItem.svg'
import acCopper from '../../resource/ordericon/sub/acCopper.svg'
import acAluminium from '../../resource/ordericon/sub/acAluminium.svg'
import batterySmall from '../../resource/ordericon/sub/batterySmall.svg'
import wmFibreBody from '../../resource/ordericon/sub/wmFibreBody.svg'
import copper from '../../resource/ordericon/sub/chair.svg'
import brass from '../../resource/ordericon/sub/brass.svg'
import aluminium from '../../resource/ordericon/sub/aluminium.svg'
import ironFist from '../../resource/ordericon/sub/ironFist.svg'
import steel from '../../resource/ordericon/sub/steel.svg'
import ironSheet from '../../resource/ordericon/sub/ironSheet.svg'
import tin from '../../resource/ordericon/sub/tin.svg'
import aluminiumChnel from '../../resource/ordericon/sub/aluminiumChnel.svg'
import cpu from '../../resource/ordericon/sub/cpu.svg'
import monitor from '../../resource/ordericon/sub/monitor.svg'
import ledTvSmall from '../../resource/ordericon/sub/ledTvSmall.svg'
import ledTvBig from '../../resource/ordericon/sub/ledTvBig.svg'
import ups from '../../resource/ordericon/sub/ups.svg'
import mobilePhone from '../../resource/ordericon/sub/mobile.svg'
import laptop from '../../resource/ordericon/sub/ew.svg'
import ew from '../../resource/ordericon/sub/ew.svg'
import musicSystem from '../../resource/ordericon/sub/musicSystem.svg'
import inductionStove from '../../resource/ordericon/sub/inductionStove.svg'
import tablet from '../../resource/ordericon/sub/tablet.svg'
import coolerBig from '../../resource/ordericon/sub/coolerBig.svg'
import collerSmall from '../../resource/ordericon/sub/coolerSmall.svg'
// import eWaste from '../../resource/ordericon/sub/eWaste.svg'
import led from '../../resource/ordericon/sub/led.svg'
// import motor from '../../resource/ordericon/sub/motor.svg'
import fan from '../../resource/ordericon/sub/fan.svg'
import engine from '../../resource/ordericon/sub/engine.svg'
import pump from '../../resource/ordericon/sub/pump.svg'
const subDataList = [{
                        id:1,
                        name:"Two Wheeler",
                        cat: "VEHICLE",
                        icon: bike,
                        content:'RS. 1500 / Pcs',
                        class : "yellow"
                    },
                    {
                        id:2,
                        name:"Four Wheeler",
                        cat: "VEHICLE",
                        icon: Fwheel,
                        content:'RS. 1500 / Pcs',
                        class : "yellow"
                    },
                    {
                        id:3,
                        name:"Carton Box",
                        cat: "Paper",
                        icon: cartoonBox,
                        content:'RS. 11 / Kg',
                        class : "yellow"
                    },
                        {
                        id:4,
                        name:"Magazine",
                        cat:"PAPER",
                        icon: magazine,
                        content:'RS. 9 / Kg',
                        class : "yellow"
                        },
                        {
                        id:5,
                        name:"News Paper",
                        cat: "PAPER",
                        icon: paper,
                        content:'RS. 23 / Kg',
                        class : "yellow"
                        },
                        {
                        id:6,
                        name:"Note Book",
                        cat: "PAPER",
                        icon: notebook,
                        content:'RS. 12 / Kg',
                        class : "yellow"
                        },
                        {
                        id:8,
                        name:"Mixed Card Board",
                        cat:"PAPER",
                        icon: mixedCardBoard,
                        content:'RS. 2 / Kg',
                        class : "yellow"
                        },
                        {
                        id:9,
                        name:"Text Book",
                        cat: "PAPER",
                        icon: textBook,
                        content:'RS. 10 / Kg',
                        class : "yellow"
                        },
                        {
                        id:10,
                        name:"Hard Plastic",
                        cat: "PLASTIC",
                        icon: hardPlastic,
                        content:'RS. 6 / Kg',
                        class : "yellow"
                        },
                        {
                        id:11,
                        name:"Pvc",
                        cat: "PLASTIC",
                        icon: pvc,
                        content:'RS. 30 / Kg',
                        class : "yellow"
                        },
                        {
                        id:12,
                        name:"Soft Plastic",
                        cat:"PLASTIC",
                        icon: softPlastic,
                        content:'RS. 6 / Kg',
                        class : "yellow"
                        },
                        {
                        id:13,
                        name:"Fiber",
                        cat: "PLASTIC",
                        icon: fibre,
                        content:'RS. 15 / Kg',
                        class : "yellow"
                        },
                        {
                        id:14,
                        name:"water Tank",
                        cat: "PLASTIC",
                        icon: waterTank,
                        content:'RS. 15 / Kg',
                        class : "yellow"
                        },
                        {
                        id:15,
                        name:"Battery Bag",
                        cat: "OTHERS",
                        icon: batteryBag,
                        content:'RS. 70 / Kg',
                        class : "yellow"
                        },
                        {
                        id:16,
                        name:"Tyre",
                        cat: "OTHERS",
                        icon: tyre,
                        content:'RS. 1 / Kg',
                        class : "yellow"
                        },
                        {
                        id:17,
                        name:"Fridge",
                        cat: "OTHERS",
                        icon: fridge,
                        content:'RS. 300 / Pcs',
                        class : "yellow"
                        },
                        {
                        id:18,
                        name:"WM Metal Body",
                        cat: "OTHERS",
                        icon: WMmetalBody,
                        content:'RS. 300 / Pcs',
                        class : "yellow"
                        },
                        {
                        id:19,
                        name:"Oven",
                        cat:"OTHERS",
                        icon: oven,
                        content:'RS. 100 / Pcs',
                        class : "yellow"
                        },
                        {
                        id:20,
                        name:"Electric Wire",
                        cat: "OTHERS",
                        icon: electricWire,
                        content:'RS. 40 / Kg',
                        class : "yellow"
                        },
                        {
                        id:21,
                        name:"Factory Disposal",
                        cat: "OTHERS",
                        icon: factoryDisposal,
                        content:'RS. 40 / Kg',
                        class : "yellow"
                        },
                        {
                        id:21,
                        name:"Machinary Item",
                        cat: "OTHERS",
                        icon: machinaryItem,
                        content:'RS. 40 / Kg',
                        class : "yellow"
                        },
                        {
                            id:22,
                            name:"AC Copper",
                            cat: "OTHERS",
                            icon: acCopper,
                            content:'RS. 55 / Pcs',
                            class : "yellow"
                        },
                        {
                            id:23,
                            name:"AC Aluminium",
                            cat: "OTHERS",
                            icon: acAluminium,
                            content:'RS. 32 / Pcs',
                            class : "yellow"
                        },
                        {
                            id:24,
                            name:"W M Fiber Body",
                            cat: "OTHERS",
                            icon: wmFibreBody,
                            content:'RS. 200 / Pcs',
                            class : "yellow"
                        },
                        {
                            id:25,
                            name:"Battery Small",
                            cat: "OTHERS",
                            icon:  batterySmall,
                            content:'RS. 40 / Kg',
                            class : "yellow"
                        },
                        {
                            id:26,
                            name:"Chair",
                            cat: "OTHERS",
                            icon: chair,
                            content:'RS. 25 / Pcs',
                            class : "yellow"
                        },
                        {
                            id:27,
                            name:"Copper",
                            cat: "METAL",
                            icon: copper,
                            content:'RS. 450 / Kg',
                            class : "yellow"
                        },
                        {
                            id:28,
                            name:"Brass",
                            cat: "METAL",
                            icon: brass,
                            content:'RS. 320 / Kg',
                            class : "yellow"
                        },
                        {
                            id:39,
                            name:"Aluminium",
                            cat: "METAL",
                            icon: aluminium,
                            content:'RS. 90 / Kg',
                            class : "yellow"
                        },
                        {
                            id:30,
                            name:"Iron First",
                            cat: "METAL",
                            icon: ironFist,
                            content:'RS. 21 / Pcs',
                            class : "yellow"
                        },
                        {
                            id:31,
                            name:"Steel",
                            cat: "METAL",
                            icon: steel,
                            content:'RS. 28 / Pcs',
                            class : "yellow"
                        },
                        {
                            id:32,
                            name:"Iron Sheets",
                            cat: "METAL",
                            icon: ironSheet,
                            content:'RS. 16 / Pcs',
                            class : "yellow"
                        },
                        {
                            id:33,
                            name:"Tin",
                            cat: "METAL",
                            icon: tin,
                            content:'RS. 3 / Kg',
                            class : "yellow"
                        },
                        {
                            id:34,
                            name:"Alum Channel",
                            cat: "METAL",
                            icon: aluminiumChnel,
                            content:'RS. 95 / Pcs',
                            class : "yellow"
                        },
                        {
                            id:36,
                            name:"CPU",
                            cat: "E-WASTE",
                            icon: cpu,
                            content:'RS. 105 / Pcs',
                            class : "yellow"
                        },
                        {
                            id:37,
                            name:"Monitor",
                            cat: "E-WASTE",
                            icon: monitor,
                            content:'RS. 20 / Pcs',
                            class : "yellow"
                        },
                        {
                            id:38,
                            name:"LED TV Small",
                            cat: "E-WASTE",
                            icon: ledTvSmall,
                            content:'RS. 50 / Kg',
                            class : "yellow"
                        },
                        {
      id:39,
      name:"LED TV Big",
      cat: "E-WASTE",
      icon: ledTvBig,
      content:'RS. 100 / Kg',
      class : "yellow"
  },
  {
      id:41,
      name:"UPS",
      cat: "E-WASTE",
      icon: ups,
      content:'RS. 30 / Kg',
      class : "yellow"
  },
  {
      id:42,
      name:"Mobile Phone",
      cat: "E-WASTE",
      icon: mobilePhone,
      content:'RS. 20 / Kg',
      class : "yellow"
  },
  {
      id:43,
      name:"Laptop",
      cat: "E-WASTE",
      icon: laptop,
      content:'RS. 100 / Kg',
      class : "yellow"
  },
  {
      id:45,
      name:"EW",
      cat: "E-WASTE",
      icon: ew,
      content:'RS. 15 / Kg',
      class : "yellow"
  },
  {
      id:46,
      name:"Music System",
      cat: "E-WASTE",
      icon: musicSystem,
      content:'RS. 50 / Kg',
      class : "yellow"
  },
  {
      id:47,
      name:"Induction Stove",
      cat: "E-WASTE",
      icon: inductionStove,
      content:'RS. 10 / Kg',
      class : "yellow"
  },
  {
      id:48,
      name:"Tablet",
      cat: "E-WASTE",
      icon: tablet,
      content:'RS. 20 / Kg',
      class : "yellow"
  },
  {
      id:49,
      name:"Cooler Big",
      cat: "E-WASTE",
      icon: coolerBig,
      content:'RS. 75 / Kg',
      class : "yellow"
  },
  {
      id:50,
      name:"Coller Small",
      cat: "E-WASTE",
      icon: collerSmall,
      content:'RS. 50 / Kg',
      class : "yellow"
  },
  {
      id:51,
      name:"E-WASTE",
      cat: "E-WASTE",
      icon: eWaste,
      content:'RS. 10 / Kg',
      class : "yellow"
  },
  {
      id:52,
      name:"LED/CFL Bulb",
      cat: "E-WASTE",
      icon: led,
      content:'RS. 5 / Pcs',
      class : "yellow"
  },
  {
      id:53,
      name:"Motor",
      cat:"MOTOR",
      icon: motor,
      content:'RS. 30 / Pcs',
      class : "yellow"
  },
  {
      id:54,
      name:"Fan",
      cat:"MOTOR",
      icon: fan,
      content:'RS. 30 / Pcs',
      class : "yellow"
  },
  {
      id:55,
      name:"Engine",
      cat:"MOTOR",
      icon: engine,
      content:'RS. 22 / Kg',
      class : "yellow"
  },
  {
  id:56,
  name:"Pump",
  cat:"MOTOR",
  icon: pump,
  content:'RS. 30 / Kg',
  class : "yellow"
  }]
const data = [
    {
        id:1,
        name:"PAPER",
        icon: paper,
        content:'Magazine,Carton Box',
        class : "green",    
    },
    {
        id:2,
        name:"PLASTIC",
        icon: plastic,
        content:'PVC, Fiber,',
        class : "green",     
    },
    {
        id:3,
        name:"METAL",
        icon: metal,
        content:'Steel, Aluminium',
        class : "green",    
    },
    {
        id:4,
        name:"E-WASTE",
        icon: eWaste,
        content:'Phone, LCD,',
        class : "green",    
    },
    {
        id:5,
        name:"MOTOR",
        icon: motor,
        content:'Fan, Water pump',
        class : "green",
    },
    {
        id:6,
        name:"VEHICLE",
        icon: bike,
        content:'Bike, Car',
        class : "green"
    },
    {
        id:7,
        name:"OTHERS",
        icon: battery,
        content:'Battery,Tyre',
        class : "green"
    },
    {
        id:8,
        name:"DISPOSE WASTE THROUGH US",
        icon: disp,
        content:'',
        class : "green"
    },
]
let items= new Set();
export const Order = () => {
const [isShown1,setIsShown1] = useState(false);
const [isShown2,setIsShown2] = useState(false);
const [one,setOne] = useState(true);
const [two,setTwo] = useState(false);
const [three,setThree] = useState(false);
const [itemList,setItemList] =useState([]);
const [cat,setCat] = useState('');
const [date,setDate] = useState('');
const [time,setTime] = useState('');
const [modalOpen, setModalOpen] = useState(false);
    const [message, setMessage] = useState('');


const eventHandler =(e)=>{
    console.log(e.target.parentNode)
    const Category = e.target.parentNode.getAttribute("data-name")
    setCat(Category)
    if(Category==="PAPER"||Category==="PLASTIC"||Category==="METAL"||Category==="E-WASTE") {console.log(1); setIsShown1(true);setIsShown2(false);}
    if(Category==="MOTOR"||Category==="VEHICLE"||Category==="OTHERS") {console.log(2);setIsShown2(true);setIsShown1(false);}
}
const eventHandler2 = (e)=>{
        if(e.target.parentNode.classList.contains('selected')){
            e.target.parentNode.classList.toggle('selected')
            items.delete(e.target.parentNode.getAttribute("data-name"))
            return
        }
        if(e.target.parentNode.parentNode.classList.contains('selected')){
            e.target.parentNode.parentNode.classList.toggle('selected')
            items.delete(e.target.parentNode.parentNode.getAttribute("data-name"))           
            return
        }
        if (e.target.parentNode.classList.contains('card'))
            {
                e.target.parentNode.classList.toggle('selected');
                items.add(e.target.parentNode.getAttribute("data-name"))            
                return
            }
        if (e.target.parentNode.parentNode.classList.contains('card')){e.target.parentNode.parentNode.classList.toggle('selected')
            items.add(e.target.parentNode.parentNode.getAttribute("data-name"))           
            return
            }
        
    }
const orderHandler1 =()=>{
    setTwo(true)
    setOne(false)
    console.log(items)
    localStorage.setItem('items',[...items]);
}
const orderHandler2=()=>{
    setTwo(false)
    setThree(true)
    const i = localStorage.getItem('items').split(',')
    setItemList(i)
    localStorage.setItem('date',)

}
const onChangeHandlerDate =(e)=>{
    setDate(e.target.value)
    localStorage.setItem('date',e.target.value)
}
const onChangeHandlerTime =(e)=>{
    setTime(e.target.value)
     localStorage.setItem('time',e.target.value)
}
const checkTextInput = () => {
    if (!date.trim()) {
      alert('Please Enter Date');
      return;
    }
    if (!time.trim()) {
      alert('Please Enter Time');
      return;
    }
    orderHandler2()
}
const pickUpHandler = ()=>{
    console.log("picked")
    let date = localStorage.getItem('date')
    setMessage(`Your PickUp is scheduled at ${date}`)
    setModalOpen(true)

    // setInterval(setModalOpen(false),1000)
    
    
}
  return (
    <>
    <div className='order'>
        <div className='order__header' >
            <Header1 header="Select Scrap" state={one}   />
            <Header1 header="Schedule Date" state={two}/>
            <Header1 header="Confirm Order" state={three}/>
        </div>
        <div className='order__body' >
           {one&& <>
                <div onClick={eventHandler}>
                        {<ItemHolder data={data.slice(0,4)} />}
                    </div>
                    <div onClick={eventHandler2}>
                        {isShown1&&<ItemHolder data={subDataList} cat={cat}/>}
                    </div>
                    <div onClick={eventHandler}>
                        {<ItemHolder data={data.slice(4,8)} />}
                    </div>
                    <div onClick={eventHandler2}>
                        {isShown2&&<ItemHolder data={subDataList} cat={cat}/>}
                    </div>
                    <div onClick={orderHandler1}>
                        <Button item="Raise Pickup" />
                    </div>
            </>}
            {two&&
                <>
                    <div className='datte'>
                        <input type='date' placeholder='Set Date' onChange={onChangeHandlerDate} required/>
                        <input type='time' onChange={onChangeHandlerTime} required/>

                    </div>
                    <div onClick={checkTextInput}>
                        <Button item="Continue"/>
                    </div>
                </>            
            }
            {three&&
                <>
                    <div className='order__confirm'>
                        <div className='order__confirm-1'>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Scrap Items</th>
                                        <th>Price</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {itemList&&itemList.map((i)=><Tr item={i} itemPrice={subDataList}/>)}
                                    
                                </tbody>
                            </table>
                        </div>
                        <div className='order__confirm-2'>
                            <div className='addPick'>
                                <div className='address'>
                                    <span>Pickup Address</span>
                                    <textarea placeholder="Write Address...."></textarea>
                                </div>
                                <div className='schedule'>
                                    <span>Scheduled Date</span>
                                    <p>{localStorage.getItem('date')}</p>
                                    <p>{localStorage.getItem('time')}</p>
                                </div>
                            </div>
                            <div className='payment'>
                                <div>
                                    <span>Select Paymet Mode</span>
                                    <div>
                                        <div className='radio-1'>
                                            <input type="radio" name='paymentType' id='Cash' value='Cash'/>
                                            <label for='Cash'>Cash</label>
                                        </div>
                                        <div className='radio-1'>
                                            <input type="radio" name='paymentType' id='Online Mode' value='Online Mode'/>
                                            <label for='Online Mode'>Online Mode</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="instruction">
                                <span>Instructions for pickup person</span>
                                <textarea placeholder="Enter comments , if any......"></textarea>
                            </div>
                            
                            
                        </div>
                    </div>
                            <div onClick={pickUpHandler}>

                <Button item="Confirm Pickup" />
                            </div>
                {modalOpen &&  alert(message)}
                </>
            }
            </div>

        
        
    </div>
    <Footer state={true}/>
    </>
  )
}

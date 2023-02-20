import React from 'react'
// import Footer from '../../components/footer'
import { Header1 } from '../../components/header'
import { ItemHolder } from '../../components/itemHolder'
import Footer from '../../components/footer'
//----------------------------------------
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
import paper from '../../resource/ordericon/paper.svg'
import eWaste from '../../resource/ordericon/eWaste.svg'
import motor from '../../resource/ordericon/motor.svg'
import bike from '../../resource/ordericon/bike.svg'

const header ="Scrape Price Chart"
const subDataList = [{
                        id:1,
                        name:"Two Wheeler",
                        cat: "VEHICLE",
                        icon: bike,
                        content:'RS. 1500 / Pcs',
                        class : "green"
                    },
                    {
                        id:2,
                        name:"Four Wheeler",
                        cat: "VEHICLE",
                        icon: Fwheel,
                        content:'RS. 1500 / Pcs',
                        class : "green"
                    },
                    {
                        id:3,
                        name:"Carton Box",
                        cat: "Paper",
                        icon: cartoonBox,
                        content:'RS. 11 / Kg',
                        class : "green"
                    },
                        {
                        id:4,
                        name:"Magazine",
                        cat:"PAPER",
                        icon: magazine,
                        content:'RS. 9 / Kg',
                        class : "green"
                        },
                        {
                        id:5,
                        name:"News Paper",
                        cat: "PAPER",
                        icon: paper,
                        content:'RS. 23 / Kg',
                        class : "green"
                        },
                        {
                        id:6,
                        name:"Note Book",
                        cat: "PAPER",
                        icon: notebook,
                        content:'RS. 12 / Kg',
                        class : "green"
                        },
                        {
                        id:8,
                        name:"Mixed Card Board",
                        cat:"PAPER",
                        icon: mixedCardBoard,
                        content:'RS. 2 / Kg',
                        class : "green"
                        },
                        {
                        id:9,
                        name:"Text Book",
                        cat: "PAPER",
                        icon: textBook,
                        content:'RS. 10 / Kg',
                        class : "green"
                        },
                        {
                        id:10,
                        name:"Hard Plastic",
                        cat: "PLASTIC",
                        icon: hardPlastic,
                        content:'RS. 6 / Kg',
                        class : "green"
                        },
                        {
                        id:11,
                        name:"Pvc",
                        cat: "PLASTIC",
                        icon: pvc,
                        content:'RS.  / Kg',
                        class : "green"
                        },
                        {
                        id:12,
                        name:"Soft Plastic",
                        cat:"PLASTIC",
                        icon: softPlastic,
                        content:'RS. 6 / Kg',
                        class : "green"
                        },
                        {
                        id:13,
                        name:"Fiber",
                        cat: "PLASTIC",
                        icon: fibre,
                        content:'RS. 15 / Kg',
                        class : "green"
                        },
                        {
                        id:14,
                        name:"water Tank",
                        cat: "PLASTIC",
                        icon: waterTank,
                        content:'RS. 15 / Kg',
                        class : "green"
                        },
                        {
                        id:15,
                        name:"Battery Bag",
                        cat: "OTHERS",
                        icon: batteryBag,
                        content:'RS. 70 / Kg',
                        class : "green"
                        },
                        {
                        id:16,
                        name:"Tyre",
                        cat: "OTHERS",
                        icon: tyre,
                        content:'RS. 1 / Kg',
                        class : "green"
                        },
                        {
                        id:17,
                        name:"Fridge",
                        cat: "OTHERS",
                        icon: fridge,
                        content:'RS. 300 / Pcs',
                        class : "green"
                        },
                        {
                        id:18,
                        name:"WM Metal Body",
                        cat: "OTHERS",
                        icon: WMmetalBody,
                        content:'RS. 300 / Pcs',
                        class : "green"
                        },
                        {
                        id:19,
                        name:"Oven",
                        cat:"OTHERS",
                        icon: oven,
                        content:'RS. 100 / Pcs',
                        class : "green"
                        },
                        {
                        id:20,
                        name:"Electric Wire",
                        cat: "OTHERS",
                        icon: electricWire,
                        content:'RS. 40 / Kg',
                        class : "green"
                        },
                        {
                        id:21,
                        name:"Factory Disposal",
                        cat: "OTHERS",
                        icon: factoryDisposal,
                        content:'RS. 40 / Kg',
                        class : "green"
                        },
                        {
                        id:21,
                        name:"Machinary Item",
                        cat: "OTHERS",
                        icon: machinaryItem,
                        content:'RS. 40 / Kg',
                        class : "green"
                        },
                        {
                            id:22,
                            name:"AC Copper",
                            cat: "OTHERS",
                            icon: acCopper,
                            content:'RS. 55 / Pcs',
                            class : "green"
                        },
                        {
                            id:23,
                            name:"AC Aluminium",
                            cat: "OTHERS",
                            icon: acAluminium,
                            content:'RS. 32 / Pcs',
                            class : "green"
                        },
                        {
                            id:24,
                            name:"W M Fiber Body",
                            cat: "OTHERS",
                            icon: wmFibreBody,
                            content:'RS. 200 / Pcs',
                            class : "green"
                        },
                        {
                            id:25,
                            name:"Battery Small",
                            cat: "OTHERS",
                            icon:  batterySmall,
                            content:'RS. 40 / Kg',
                            class : "green"
                        },
                        {
                            id:26,
                            name:"Chair",
                            cat: "OTHERS",
                            icon: chair,
                            content:'RS. 25 / Pcs',
                            class : "green"
                        },
                        {
                            id:27,
                            name:"Copper",
                            cat: "METAL",
                            icon: copper,
                            content:'RS. 450 / Kg',
                            class : "green"
                        },
                        {
                            id:28,
                            name:"Brass",
                            cat: "METAL",
                            icon: brass,
                            content:'RS. 320 / Kg',
                            class : "green"
                        },
                        {
                            id:39,
                            name:"Aluminium",
                            cat: "METAL",
                            icon: aluminium,
                            content:'RS. 90 / Kg',
                            class : "green"
                        },
                        {
                            id:30,
                            name:"Iron First",
                            cat: "METAL",
                            icon: ironFist,
                            content:'RS. 21 / Pcs',
                            class : "green"
                        },
                        {
                            id:31,
                            name:"Steel",
                            cat: "METAL",
                            icon: steel,
                            content:'RS. 28 / Pcs',
                            class : "green"
                        },
                        {
                            id:32,
                            name:"Iron Sheets",
                            cat: "METAL",
                            icon: ironSheet,
                            content:'RS. 16 / Pcs',
                            class : "green"
                        },
                        {
                            id:33,
                            name:"Tin",
                            cat: "METAL",
                            icon: tin,
                            content:'RS. 3 / Kg',
                            class : "green"
                        },
                        {
                            id:34,
                            name:"Alum Channel",
                            cat: "METAL",
                            icon: aluminiumChnel,
                            content:'RS. 95 / Pcs',
                            class : "green"
                        },
                        {
                            id:36,
                            name:"CPU",
                            cat: "E-WASTE",
                            icon: cpu,
                            content:'RS. 105 / Pcs',
                            class : "green"
                        },
                        {
                            id:37,
                            name:"Monitor",
                            cat: "E-WASTE",
                            icon: monitor,
                            content:'RS. 20 / Pcs',
                            class : "green"
                        },
                        {
                            id:38,
                            name:"LED TV Small",
                            cat: "E-WASTE",
                            icon: ledTvSmall,
                            content:'RS. 50 / Kg',
                            class : "green"
                        },
                        {
      id:39,
      name:"LED TV Big",
      cat: "E-WASTE",
      icon: ledTvBig,
      content:'RS. 100 / Kg',
      class : "green"
  },
  {
      id:41,
      name:"UPS",
      cat: "E-WASTE",
      icon: ups,
      content:'RS. 30 / Kg',
      class : "green"
  },
  {
      id:42,
      name:"Mobile Phone",
      cat: "E-WASTE",
      icon: mobilePhone,
      content:'RS. 20 / Kg',
      class : "green"
  },
  {
      id:43,
      name:"Laptop",
      cat: "E-WASTE",
      icon: laptop,
      content:'RS. 100 / Kg',
      class : "green"
  },
  {
      id:45,
      name:"EW",
      cat: "E-WASTE",
      icon: ew,
      content:'RS. 15 / Kg',
      class : "green"
  },
  {
      id:46,
      name:"Music System",
      cat: "E-WASTE",
      icon: musicSystem,
      content:'RS. 50 / Kg',
      class : "green"
  },
  {
      id:47,
      name:"Induction Stove",
      cat: "E-WASTE",
      icon: inductionStove,
      content:'RS. 10 / Kg',
      class : "green"
  },
  {
      id:48,
      name:"Tablet",
      cat: "E-WASTE",
      icon: tablet,
      content:'RS. 20 / Kg',
      class : "green"
  },
  {
      id:49,
      name:"Cooler Big",
      cat: "E-WASTE",
      icon: coolerBig,
      content:'RS. 75 / Kg',
      class : "green"
  },
  {
      id:50,
      name:"Coller Small",
      cat: "E-WASTE",
      icon: collerSmall,
      content:'RS. 50 / Kg',
      class : "green"
  },
  {
      id:51,
      name:"E-WASTE",
      cat: "E-WASTE",
      icon: eWaste,
      content:'RS. 10 / Kg',
      class : "green"
  },
  {
      id:52,
      name:"LED/CFL Bulb",
      cat: "E-WASTE",
      icon: led,
      content:'RS. 5 / Pcs',
      class : "green"
  },
  {
      id:53,
      name:"Motor",
      cat:"MOTOR",
      icon: motor,
      content:'RS. 30 / Pcs',
      class : "green"
  },
  {
      id:54,
      name:"Fan",
      cat:"MOTOR",
      icon: fan,
      content:'RS. 30 / Pcs',
      class : "green"
  },
  {
      id:55,
      name:"Engine",
      cat:"MOTOR",
      icon: engine,
      content:'RS. 22 / Kg',
      class : "green"
  },
  {
  id:56,
  name:"Pump",
  cat:"MOTOR",
  icon: pump,
  content:'RS. 30 / Kg',
  class : "green"
  }]

const RateChart = () => {
  return (
    <>
      <div className='rateChart'>
      <Header1 header={header} state={true}/>
      <ItemHolder  data={subDataList}/>
      </div>
      <Footer state={true}/>
    </>
  )
}

export default RateChart

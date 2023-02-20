import React from 'react'
import Footer from '../../components/footer'
import abs1 from '../../resource/abs1.svg'
import abs2 from '../../resource/abs2.svg'
const Aboutus = () => {
  return (
    <>
        <div className='aboutUsContainer'>
            <div className='aboutUs'>
                <div className='aboutUs-1'>
                    <img className='aboutUs__img' src={abs1} alt="" srcset="" />
                    <div className='aboutUs__body'>
                        <div>
                            <span className = "header2">WHO WE ARE</span>
                            <span>
                                <p>
                                   ZaboRRR is a Waste Manangement Technology to make trash collection more efficient, cost effective and environmentally friendly. Our aim is to assist in minimizing the trash amount that ends up in waterways and landfills every year concerning the people of Assam and the environment as a whole for further separation, recycling, transformation and more.
                                </p>
                            </span>
                        </div>
                    </div>
                </div>
                <div className='aboutUs-1'>
                    <img className='aboutUs__img aboutUs__img-u' src={abs2} alt="" srcset="" />
                    <div className='aboutUs__body aboutUs__body-u'>
                        <div>
                            <span className='header2'>WHO WE ARE</span>
                            <span>
                                <p>
                                   We provide a service by collecting the wastes(Material) to maximise the re-use of materials, minimise the amount of waste sent to landfill and have a positive effect on the environmental performance. Being waste managers, we’re passionate recyclers first and foremost.
                                </p>
                            </span>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
        <Footer state={true}/>
    </>
    
  )
}

export default Aboutus
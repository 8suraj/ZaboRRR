import bin from '../resource/bin.svg'
import { Button } from './button'
import { Link } from 'react-router-dom'
const Hero = ()=>{
    return(
        <>
        <section className="hero">
            <h1 className="hero__header">Let us <span className="highlight">manage</span>  <br/> the <span className="highlight">waste</span> at <br/> your place.</h1>
            <div className="hero__img">
                <img src={bin} alt="" srcset="" />
            </div>
        </section>
        <div className = "sell-scrap-btn-box">
            <Link to='/sellscrape'><Button item="Sell Scrap"/></Link>
        </div>
       
        </>
        
    )
}
export default Hero;
import bin from '../resource/bin.svg'
const Hero = ()=>{
    return(
        <section className="hero">
        <h1 className="hero__header">Let us <span className="green">manage</span>  <br/> the <span className="green">waste</span> at <br/> your place.</h1>
        <div className="hero__img">
            <img src={bin} alt="" srcset="" />
        </div>
    </section>
    )
}
export default Hero;
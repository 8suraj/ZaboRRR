
// import footerImg from '../resource/footerImg.jpg';
import fb from '../resource/fb.svg';
import insta from '../resource/insta.svg';
import twitter from '../resource/twitter.svg';
import gp from '../resource/gp.svg';
import {Link} from "react-router-dom";
import logo from '../resource/logo.svg'
const Footer = ({state})=>{
    let cl;
    if(state){cl='hidden'}
    return(
        <div className="footer">
            <div className={`footer__container__1 ${cl} `}>
                {/* <img className="footer__img" src={footerImg} alt="" srcset="" /> */}
            </div>
            <div className="footer__container__2 ">
                <div className="footer__container__2-1">
                    <ul>
                        <li>Locations</li>
                        <li>Jalukbari</li>
                        <li>Garchuk</li>
                        <li>Khanapara</li>
                        <li>Maligaon</li>
                        <li>Ganeshguri</li>
                        <li>Paltanbazar</li>
                        <li>Ulubari</li>
                    </ul>
                </div>
                <div className="footer__container__2-2">
                     <ul>
                        <li>Links</li>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/ratechart'>Rate Chart</Link></li>
                        <li><Link to='/refundpolicy'>Refund Policy</Link></li>
                        <li><Link to='/aboutus'>About Us</Link></li>
                        {/* <li><Link to='/contact'>Contact</Link></li> */}
                        <li><Link to='/policy'>Privacy Policy</Link></li>
                        <li><Link to='/sellscrape'>Sell Scrap</Link></li>
                        <li><Link to='/terms'>Terms & Conditions</Link></li>
                    </ul>
                </div>
                <div className="footer__container__2-3">
                    <textarea placeholder="Please comment us your opinion or suggest us...."></textarea>
                    <button>Submit</button>
                </div>
                <div className="footer__container__2-4">
                    <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                    <div className='fourth'>
                        
                        <div className='footer__container__2-4--logobox'><Link to='/'><img src={logo} alt="" /></Link></div>
                        <div className='footer__container__2-4--social'>
                            <img src={fb} alt="" />
                            <img src={insta} alt="" />
                            <img src={twitter} alt="" />
                            <img src={gp} alt="" />
                        </div>
                        <div className='footer__container__2-4--tm'>@2022 Name Agency</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Footer;
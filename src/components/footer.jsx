
// import footerImg from '../resource/footerImg.jpg';
import fb from '../resource/fb.svg';
import insta from '../resource/insta.svg';
import twitter from '../resource/twitter.svg';
import gp from '../resource/gp.svg';
const Footer = ()=>{
    return(
        <div className="footer">
            <div className='footer__container__1'>
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
                        <li>Home</li>
                        <li>Rate Chart</li>
                        <li>Refund Policy</li>
                        <li>About Us</li>
                        <li>Contact</li>
                        <li>Privacy Policy</li>
                        <li>Sell Scrap</li>
                        <li>Terms & Conditions</li>
                    </ul>
                </div>
                <div className="footer__container__2-3">
                    <textarea placeholder="Please comment us your opinion or suggest us...."></textarea>
                    <button>Submit</button>
                </div>
                <div className="footer__container__2-4">
                    <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                    <div className='fourth'>
                        
                        <div className='footer__container__2-4--logobox'>LOGO</div>
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
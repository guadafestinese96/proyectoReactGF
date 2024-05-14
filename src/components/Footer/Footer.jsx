import './Footer.css'
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div className='footer'>

            <a href="https://www.google.com.ar/maps/place/Av.+Cabildo+%26+Federico+Lacroze,+Buenos+Aires/@-34.5700111,-58.4474731,17z/data=!3m1!4b1!4m6!3m5!1s0x95bcb5c6bbd6c195:0x8d66a583de9c1d98!8m2!3d-34.5700155!4d-58.4448982!16s%2Fg%2F11gdzz_5gm?entry=ttu" target="_blank"><img className="imgLogosFooter" src="../../src/assets/maps.png" alt="mapa" /></a>
            <a href="https://api.whatsapp.com/send/?phone=1161950112&text&type=phone_number&app_absent=0" target="_blank"><img className="imgLogosFooter" src="../../src/assets/whatsapp.png" alt="mapa" /></a>
            <a href="https://www.instagram.com/widistoreok__/" target="_blank"><img className="imgLogosFooter" src="../../src/assets/insta.png" alt="mapa" /></a>
           
        </div>
    )
}

export default Footer;
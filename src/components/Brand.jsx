import { NavLink } from "react-router-dom";
import logoWidi from "../assets/widiLogoRedondo.png";

function Brand(){
    return(
        <div>
            <NavLink to={"/"}>
            <img src={logoWidi} alt="logoWidi" className="logoWidiImg"/>
            </NavLink>
        </div>
    )
}

export default Brand;
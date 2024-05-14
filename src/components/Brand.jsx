import { NavLink } from "react-router-dom";

function Brand(){
    return(
        <div>
            <NavLink to={"/"}>
            <img src="../../src/assets/widiLogoRedondo.png" alt="logoWidi" className="logoWidiImg"/>
            </NavLink>
        </div>
    )
}

export default Brand;
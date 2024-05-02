import './CategoryList.css'
import { NavLink } from 'react-router-dom';

function CategoryList(){
    return(
        <ul>
            <li><NavLink className={({isActive})=> isActive ? "activeLink" : " " } to={"/fraganciasHombre"}> Fragancias Hombre</NavLink></li>
            <li><NavLink className={({isActive})=> isActive ? "activeLink" : " " } to={"/fraganciasMujer"}> Fragancias Mujer</NavLink></li>
        </ul>
    );
}

export default CategoryList;
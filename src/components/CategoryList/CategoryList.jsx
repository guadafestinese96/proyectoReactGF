import './CategoryList.css'
import { NavLink } from 'react-router-dom';

function CategoryList(){
    return(
        <ul>
            <li><NavLink to={"/fraganciasHombre"}> Fragancias Hombre</NavLink></li>
            <li><NavLink to={"/fraganciasMujer"}> Fragancias Mujer</NavLink></li>
        </ul>
    );
}

export default CategoryList;
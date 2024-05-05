import './CategoryList.css'
import { NavLink } from 'react-router-dom';

const MIS_RUTAS=[
    {
        path: "/seccion/filtrar",
        label:"FILTRAR",
    },
    {
        path: "/seccion/marcas",
        label:"MARCAS",
    }
]
function CategoryList(){
    return(
        <ul>
            {MIS_RUTAS.map((ruta, index)=>(
                <li key={index}>
                    <NavLink  className={({isActive})=> isActive ? "activeLink" : " " } to={ruta.path}> {ruta.label}</NavLink>
                </li>
            )

            )}
        </ul>
    );
}

export default CategoryList;
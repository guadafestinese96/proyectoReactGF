import React from "react";
import usePerfume from "../../hooks/usePerfume";
import Item from "../ItemList/Item";
import { useParams } from "react-router-dom";
import "./ItemDetailContainer.css"


export default function ItemDetailContainer(){

    const {id} = useParams();
    const {perfume, isLoading} = usePerfume(parseInt(id));

    if (isLoading) return <h1>Cargando...</h1>
    console.log(id);
   

    if(!perfume){
        return <h1>ID DE PERFUME INEXISTENTE</h1>
    }else{
        return(
        <div className="perfumeEncontrado">
            <h1>PERFUME ENCONTRADO</h1>
            <Item item={perfume}/>
        </div>    
    )
    }
 
}
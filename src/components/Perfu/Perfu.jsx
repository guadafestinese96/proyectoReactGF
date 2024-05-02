import { useParams } from "react-router-dom"
import usePerfumes from "../../hooks/usePerfumes";

export default function Perfu(){
    const {perfuId} = useParams();
    
   const perfumitos= usePerfumes();
   Object.keys(perfumitos)
   console.log(perfumitos);


    return (
    <div>
        <h1>Perfume de mujer {perfuId}</h1>
        <img src={perfuId.img} alt="img" />
        </div>
    )
}
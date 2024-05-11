import { useEffect, useState } from "react";
import { getPerfumes, getPerfumesPorMarca } from "../components/mock/asyncMock";


export default function usePerfumes(idMarca) {

    const [perfumes, setPerfumes] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        if(idMarca){
            getPerfumesPorMarca(idMarca).then((data)=>setPerfumes(data)).finally(()=> setIsLoading(false))
        }else{
        getPerfumes()
            .then((data) => setPerfumes(data))
            .finally(() => setIsLoading(false))
        }
    }, [idMarca])
    
    return {perfumes, isLoading};
}
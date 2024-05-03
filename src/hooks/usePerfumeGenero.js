import { useEffect, useState } from "react";
import { getPerfumesByGenero } from "../components/mock/asyncMock";

export default function usePerfumeGenero(genero) {

    const [perfumes, setPerfumes] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true); 
        getPerfumesByGenero(genero)
            .then((data) => setPerfumes(data))
            .finally(() => setIsLoading(false)); 
    }, [genero]);

    return {perfumes, isLoading};
}

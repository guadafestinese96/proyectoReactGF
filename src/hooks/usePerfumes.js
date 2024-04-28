import { useEffect, useState } from "react";
import { getPerfumes } from "../components/mock/asyncMock";

export default function usePerfumes() {

    const [perfumes, setPerfumes] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getPerfumes()
            .then((data) => setPerfumes(data))
            .finally(() => setIsLoading(false))
    }, [])
    
    return {perfumes, isLoading};
}
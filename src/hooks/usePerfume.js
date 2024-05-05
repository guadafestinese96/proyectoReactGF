import { useEffect, useState } from "react";
import { getPerfumesById } from "../components/mock/asyncMock";
import { useParams } from "react-router-dom";


export default function usePerfume(id) {

    const [perfume, setPerfume] = useState(undefined);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getPerfumesById(id)
            .then((data) => setPerfume(data))
            .finally(() => setIsLoading(false))
    }, []);
    
    return {perfume, isLoading};
}
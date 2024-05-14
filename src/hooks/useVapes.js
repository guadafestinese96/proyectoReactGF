import { useEffect, useState } from "react";
import { getVapes } from "../components/mock/vapesMock";


export default function useVapes() {

    const [vapes, setVapes] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        getVapes()
            .then((data) => setVapes(data))
            .finally(() => setIsLoading(false))
    }, [])
    
    return {vapes, isLoading};
}
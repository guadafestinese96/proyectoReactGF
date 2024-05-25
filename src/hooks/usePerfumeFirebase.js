import { doc, getDoc, getFirestore } from "firebase/firestore";
import { useEffect, useState } from "react";


export default function usePerfumeFirebase(id) {

    const [perfume, setPerfume] = useState(undefined);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const db = getFirestore();
    
        const productRef = doc(db, "perfumes", id);
        getDoc(productRef)
          .then((doc) => {
            if (doc.exists()) {
              setPerfume({
                id: doc.id,
                ...doc.data(),
              });
            } else {
              alert("No such document!");
            }
          })
          .finally(() => setIsLoading(false));
      }, [id]);
    
    return {perfume, isLoading};
}



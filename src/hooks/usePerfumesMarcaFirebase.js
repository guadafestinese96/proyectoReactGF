import { useEffect, useState } from "react";
import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";

export default function usePerfumesMarcaFirebase(idMarca) {
  const [perfumes, setPerfumes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const db = getFirestore();
    const productsCollection = collection(db, "perfumes");
    if (idMarca) {
      const productsQuery = query(
        productsCollection,
        where("idMarca", "==", idMarca)
      );

      getDocs(productsQuery)
        .then((snapshot) => {
          setPerfumes(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              ...doc.data(),
            }))
          );
        })
        .finally(() => setIsLoading(false));
    } else {
      getDocs(productsCollection)
        .then((snapshot) => {
          setPerfumes(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              ...doc.data(),
            }))
          );
        })
        .finally(() => setIsLoading(false));
    }
  }, [idMarca]);

  return { perfumes, isLoading };
}
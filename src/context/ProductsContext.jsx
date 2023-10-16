import { createContext, useEffect, useState } from "react";
import { getFirestore, collection, getDocs } from 'firebase/firestore'


export const ProductsContext = createContext({loading: true});

export default function ProductsContextProvider({ children }){

    const [products, setProducts] = useState({loading: true});


    useEffect(() => {
        const db = getFirestore();
        const productsRef = collection(db, "products");

        getDocs(productsRef)
        .then((snapshot) => {
            setProducts({list: snapshot.docs.map((doc)=>({id: doc.id, ...doc.data()})), loading: false})
        })
    }, [])




    return (
        <ProductsContext.Provider value={products}>
            {children}
        </ProductsContext.Provider>
    )
}
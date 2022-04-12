import { getProducts } from './../../asynmock';
import { useState, useEffect } from 'react';
import { Item } from './../Item/Item';

export const ItemList = ()=>{
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts().then(products => setProducts(products))
    }, [])
    
    return(
        <>
            <div className="container p-5 d-flex justify-content-start align-items-center gap-4">
            {
                products.map(product => <Item key={product.id} {...product}/>)
            }
            </div>
        </>
    )
}
import React, {useCallback, useEffect, useState} from 'react'
import './ProductList.css'
import ProductItem from "../producItem/ProductItem";
import {products} from "../../data/products";
import {IProduct} from "../../Interface";
import {useTelegram} from "../../hooks/userTelegram";

const getTotalPrice = (items: any) => {
    return items.reduce((acc: any, item: { price: any; }) => {
        return acc += item.price
    }, 0)
}

const ProductList = () => {
    const [addedItems, setAddedItems] = useState<IProduct[]>([])
    const {tg, queryId} = useTelegram()

    const onSendData = useCallback(()=>{
        const data ={
            products: addedItems,
            totalPrice: getTotalPrice(addedItems),
            queryId
        }

        fetch('http://46.101.102.231:8000/web-data', {
            method: "POST",
            headers: {
                'Content-Type': "application/json",
            },
            body: JSON.stringify(data)
        })
    }, [addedItems])

    useEffect(() => {
        tg.onEvent('mainButtonClicked', onSendData)
        return () => {
            tg.offEvent('mainButtonClicked', onSendData)
        }
    }, [onSendData])

    const onAdd = (product: IProduct) => {
        const alreadyAdded = addedItems.find(item => item.id === product.id);
        let newItems = [];

        if (alreadyAdded)
            newItems = addedItems.filter(item => item.id !== product.id)
        else
            newItems = [...addedItems, product]
        setAddedItems(newItems)

        if (newItems.length === 0)
            tg.MainButton.hide()
        else {
            tg.MainButton.show()
            tg.MainButton.setParams({
                text: `Buy ${getTotalPrice(newItems)}`
            })
        }
    }
    return (
        <div>
            {products.map(item => (
                <ProductItem product={item} onAdd={onAdd} key={item.id}/>
            ))}
            <button onClick={onSendData}>lol</button>
        </div>
    )
}

export default ProductList;
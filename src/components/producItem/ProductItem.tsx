import React from 'react'
import './ProductItem.css'
import Button from "../button/Button";
import {IProduct} from "../../Interface";

const ProductItem = ({product, onAdd}: { product: IProduct, onAdd: (e: IProduct) => void }) => {
    const onAddHandler = () => {
        onAdd(product)
    }
    return (
        <div className={'product'}>
            <div className={'img'}/>
            <div className={'tittle'}>{product.title}</div>
            <div className={'description'}>{product.description}</div>
            <div className={'price'}>
                <span>Price: <b>{product.price}</b></span>
            </div>
            <Button className={'add-btn'} onClick={onAddHandler}>
                add to cart
            </Button>

        </div>
    )
}

export default ProductItem;
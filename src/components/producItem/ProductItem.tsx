import React from 'react'
import './ProductItem.css'
import Button from "../button/Button";
import {IProduct} from "../../Interface";

const ProductItem = ({product, onAdd}: { product: IProduct, onAdd: (e: IProduct) => void }) => {
    const onAddHandler = () => {
        onAdd(product)
    }
    return (
        <div className={'item'}>
            <img src={product.img} className={'img'} alt={product.title}/>
            <div className={'name'}>
                {product.title}
                <span> · </span>
                <span className={'price'}>
                    ${product.price}
                </span>
            </div>
            <Button className={'btn'} onClick={onAddHandler}>
                add
            </Button>

        </div>
    )
}

export default ProductItem;
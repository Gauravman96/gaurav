import React from "react";
import ProductDate from "./ProductDate";

const ProductItem =(props)=>{
    return (
        <div>
            <ProductDate data={props.date}/>
            <h1>{props.itemname}</h1>
            <h2>{props.amount}</h2>
        </div>
    )
}
export default ProductItem;
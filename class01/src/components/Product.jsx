import React from "react";
import ProductItem from "./ProductItem";

const Product =(props)=>{
    return(
        <div>
        <ProductItem Itemname={props.arr[0].ItemName} amount={props.arr[0].amount} date={props.arr[0].date}/>
        <ProductItem Itemname={props.arr[1].ItemName} amount={props.arr[1].amount} date={props.arr[1].date}/>
        <ProductItem Itemname={props.arr[2].ItemName} amount={props.arr[2].amount} date={props.arr[2].date}/>
        <ProductItem Itemname={props.arr[3].ItemName} amount={props.arr[3].amount} date={props.arr[3].date}/>

        </div>
    )
    
}
export default Product;
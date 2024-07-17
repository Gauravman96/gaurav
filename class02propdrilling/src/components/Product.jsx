import React from "react";
import ProductItem from "./ProductItem";

const Product =(props)=>{
    return (
        <div>
        <ProductItem itemname={props.arr[0].itemName} amount={props.arr[0].amount} date ={props.arr[0].date}/>
        <ProductItem itemname={props.arr[1].itemName} amount={props.arr[1].amount} date ={props.arr[1].date}/>
        <ProductItem itemname={props.arr[2].itemName} amount={props.arr[2].amount} date ={props.arr[2].date}/>
        <ProductItem itemname={props.arr[3].itemName} amount={props.arr[3].amount} date ={props.arr[3].date}/>
        </div>
    )
}
export default Product;
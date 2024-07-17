import React from "react";

const ProductDate =(props)=>{
    
    const month=props.date.toLocaleDateString('en-us',{month: 'long'});
    const day =props.date.toLocaleDateString('en-us',{day:'2-digit'});
    const year = props.date.getFullYear();
    return(
        <div>
            {month}/{day}/{year}
        </div>
    )
}
   
export default ProductDate;
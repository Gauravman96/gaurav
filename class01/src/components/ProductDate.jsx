import React from "react";

const ProductDate =(props)=>{
    const month=props.data.toLocaleDateString('en-us',{month: 'long'});
    const day =props.data.toLocaleDateString('en-us',{day:'2-digit'});
    const year = props.data.getFullYear();
    return(
        <div>
            {month}/{day}/{year}
        </div>
    )
}
export default ProductDate;
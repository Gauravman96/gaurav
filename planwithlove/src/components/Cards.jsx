import React from "react";
function Cards({id, info, image, name, price ,BtnHandler}){
    return(
        <div>
            <img src={image}/>
        
            <div>
              <h2>${price}</h2>
              <h3>{name}</h3>   
            </div>
          <div>
                {info}
          </div>
          <button onclick ={()=>BtnHandler(id)}> Not intersted </button>

        </div>
    )
}
export default Cards;
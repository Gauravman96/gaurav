import React from "react";
import Cards from "./Cards";

function Tour({data ,BtnHandler}){
    return (
      <div>
            <div> <h1>Plan with Love</h1></div>
            <div>
                {
                    data.map((tour)=>{
                        return <Cards Key={tour.id}{...tour} BtnHandler ={BtnHandler}/>
                    })
                }
            </div>
       </div>
    )
    
}
export default Tour;
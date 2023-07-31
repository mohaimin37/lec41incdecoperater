import React, { useState } from 'react'
const Anas = () =>{
const[c,d] = useState(0);

const inc = () =>{
    d(c+1)
};
const dec = ()=>{
d(
    c-1
);
if(c<=0){
    alert('it will not move now')

    d(0)
   
    
}
}



    return(
    <>
    <div class = "main_div">
        <h1 class = "sec">
        <input type = "number"
            placeholder={c} />
            </h1>
        
        <div class = "btn">
        <button onClick={inc}>increase</button>
        <button onClick={dec}>decrease</button>
</div>
            
        </div>
    

    </>)
}
export default Anas;
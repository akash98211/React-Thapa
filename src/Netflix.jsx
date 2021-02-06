import React from "react";
import Cards from "Cards";
import Sdata from "Sdata";

const Netflix =()=>{
    return(
        <Cards 
        key={Sdata[1].id}
        imgsrc={Sdata[1].imgsrc}
        title={Sdata[1].title}
        sname={Sdata[1].sname}
        link={Sdata[1].link}
    />
    )
}

export default Netflix;
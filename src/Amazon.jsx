import React from "react";
import Cards from "Cards";
import Sdata from "Sdata";

const Netflix =()=>{
    return(
        <Cards 
        key={Sdata[2].id}
        imgsrc={Sdata[2].imgsrc}
        title={Sdata[2].title}
        sname={Sdata[2].sname}
        link={Sdata[2].link}
    />
    )
}

export default Amazon;
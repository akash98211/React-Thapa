import React from "react";
import Amazon from "./Amazon";
import Netflix from "./Netflix";

const favseries="netflix";

const favs =()=>{
    {(favseries==="netflix") ?  <Netflix/> : <Amazon/>}
    
    }

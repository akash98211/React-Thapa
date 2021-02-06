import React from 'react';
import ReactDom from 'react-dom';
import "./index.css";
import Sdata from "./Sdata";

console.log(Sdata[0]);

ReactDom.render(
  <>
  <h1>list of top 5 netflix</h1>
  <Sdata/>
  <Card 
   imgsrc={Sdata[0].imgsrc}
   title={Sdata[0].title}
   sname={sname[0].sname}
   links={sname[0].links}
  />

<Card 
   imgsrc={Sdata[1].imgsrc}
   title={Sdata[1].title}
   sname={sname[1].sname}
   links={sname[1].links}
  />

<Card 
   imgsrc={Sdata[2].imgsrc}
   title={Sdata[2].title}
   sname={sname[2].sname}
   links={sname[2].links}
  /> 
  </>
  
 ,document.getElementById('root')
);
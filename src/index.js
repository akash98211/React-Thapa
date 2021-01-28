import React from 'react';
import ReactDom from 'react-dom';
import  './index.css';

const image1="https://picsum.photos/200/300";
const image2="https://picsum.photos/250/300";
const image3="https://picsum.photos/230/300";

const heading={
  textAlign ="center", color: " #fa9191",
};
ReactDom.render(
  <>
 <h1  style={{heading }}>{`this is fnamelname`}</h1>
 <div className="img_dev">
   <img src={image1} alt="random image" />
  <img src={image2} alt="random image" />
  <img src={image3} alt="random image" />
 </div>
 </>
,document.getElementById('root')
);
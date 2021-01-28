import React from 'react';
import ReactDom from 'react-dom';
import './index.css';

let time=new Date(2021,1,1,20);
time=time.getHours();
let cssStyle={}

if(time>=1 && time<=11)
{time='Moring';
 cssStyle.color='green';
}
else if(time>=12 && time<= 19)
{time='Afternoon';
cssStyle.color='orange';
}

else
{time='Evening';
cssStyle.color='Red';}  

ReactDom.render(
<><div>
  <h1>Hello Sir,Good  <span style={cssStyle}>{time}</span></h1>
  </div>
  </>
  ,document.getElementById('root')

);
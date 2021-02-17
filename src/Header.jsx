import React from 'react';
import logo from './images/logo.jpg';

const Header =() =>
{
 return(
     <>
     <div className="header">
         <img src={logo} alt='logo img' width='70'height='50'/>
         <h1>Google Keep Clone</h1>
     </div>
     </>
 );
};
export default Header;

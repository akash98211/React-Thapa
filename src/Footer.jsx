import React from 'react';

const Footer =() =>
{
    const year = new Date().getFullYear();
    return(
     <>
     <div className="Footer">
         
         <p>Copyrigth  © {year} </p>
      </div>   
    </>
 );
};
export default Footer;

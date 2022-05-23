import React from 'react';
import ABC from "./ABC.png";
import HRC from "./logohighradiuscolor.png";

import './NavBar.css';

function NavBar() {
  return (
   <>
   
   <div className="navbar">
       <div className="topleft">
           <img src={ABC} alt="ABC" />           
       </div>
        <div className="top">
           <img src={HRC} alt="ABC" />
        </div>
   </div>
   </>
  );
}

export default NavBar;

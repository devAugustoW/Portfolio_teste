import React from 'react';
import "./ScrollUp.css";

const ScrollUp = () => {
   window.addEventListener("scroll", function() {
      const scrollUp = document.querySelector(".scrollup");

      // quando o 'scroll' esta maior que 560 viewport height, add a 'classe' 'show-scroll' 
      if (this.scrollY >= 560) scrollUp.classList.add("move-scroll");
      
      else scrollUp.classList.remove("move-scroll")
   })

   return (
      <a href="#" className='scrollup'>
         <i className='uil uil-arrow-up scrollup__icon'></i>
      </a>
   )
}

export default ScrollUp
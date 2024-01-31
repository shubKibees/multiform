import React from 'react'
import asideImage from "../../public/assets/images/bg-sidebar-desktop.svg";

const Aside = ({activeStep,targetStep,length}) => {
   let arr=[];
   for(let index=1;index<=length;index++){
      arr.push(
         <li key={index} className={activeStep===index?"nav-bar active":"nav-bar"} onClick={()=>{targetStep(index)}}>
            <p className="fw-regular text-neutral-350">Step {index}</p>
            <h3 className="step fw-bold text-neutral-300">{}</h3>
         </li>
      )
    }
    return (
     <aside className='stack'>
      <img src={asideImage} alt="asideImage" />
      <ul role='list'>
         {arr}
      </ul>
     </aside>
    );
}

export default Aside
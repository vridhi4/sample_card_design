import React from 'react';
import { useState } from 'react';
import './readMoreReadLess.css';
import { RxCheck } from "react-icons/rx";
function ReadMoreReadLess(props) {

    const[collapse, setCollapse] = useState(false)
    return (
        <div className='content'>
            <div className="cardHeading">
                <h2>Basic Care</h2>
            </div>
            <div className="card-desc">
            <RxCheck className='tick'/>
            Pediatric care in 15 minutes           
             </div>
             <div className='expanded'>
            <span className= {collapse? "long-text" : ""}>
                    <ul>
                        <li>    <RxCheck className='tick'/> Instant chat with pediatricians on WhatsApp </li>
                        <li>  <RxCheck className='tick'/>Free pediatrician consultations (day)</li>
                        <li>  <RxCheck className='tick'/>Free pediatrician consultations (day)</li>
                    <li>  <RxCheck className='tick'/>Live Yoga Sessions</li>
                       
                       </ul>
         </span>
            </div>
       

            <div className="card-desc1">
                <div className="price">₹2499</div>
                <div className="details">10 days Refund Policy</div>
               
            </div>

            
                
            
            <div className="cardButtons">
<button className="knowMore">know more</button>
<button className="readMore" onClick={()=> setCollapse((prev)=> !prev)}> readmore </button>

            </div>
       
           
            
        </div>
    );
}

export default ReadMoreReadLess;
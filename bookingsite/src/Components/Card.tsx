import './Card.css' 
import { useEffect , useState }from 'react'
import axios from 'axios'

function Card( ) {
  return (


    <div className='Container '>
        <div> 
        <img className='cimg' src='https://images.unsplash.com/photo-1445019980597-93fa8acb246c?q=80&w=874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>


        <h4> Hilton Hotel <span className='price'> 1200$ </span>  </h4> 
        <p className='loc'> Granary Wharf, 2 Wharf Approach, Leeds LS1 4BR, UK </p>
        
        <button className="btnc"> Read more </button>
         </div>

        </div>
  )
}

export default Card

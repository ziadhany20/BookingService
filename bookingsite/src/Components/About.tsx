import './About.css'
import React from 'react'

function About() {
  return (
    <div className='main'>
        <div className="content">
            <h3>Our Story Begins Here! </h3>
            <p className="paraa">
            he First Canadian college in Egypt that you’ll call home for the next 4-5 years, where you will earn your bachelor’s degree and experience growth in all aspects of your life.
            At CIC, you take the first step towards your future through a diverse range of programs recognized by the Ministry of Higher Education, the Supreme Council of Universities in Egypt, and NAQAAE. 
            Our vibrant campus life broadens your horizons beyond classroom walls, offering opportunities for learning, creating, and proving yourself.
            Most importantly, we provide an environment that encourages you to “Make it Happen.”
            </p>
            <button className="btn">
                Read more!
            </button>
        </div>
        
            <img  className="imgg" src='https://images.unsplash.com/photo-1719683193558-1d08017c2217?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
       
      
        
        </div>
  )
}

export default About
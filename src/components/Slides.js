import React from 'react'

function Slides(props) {
  return (  
    <div>
         {props.slides.map((pg,index)=> {
           if(index===props.nextPage){
            return (
              <div key={index} className="center" >
                    <div className="container">
                       <h1 >{pg.title}</h1>
                       <div class="divider"></div>
                       <h4 /*{props.nextPage ===0 || props.nextPage ===2 ?className='green-text': className='red-text'}*/ className='teal-text' >{pg.text}</h4>
                    </div>                 
              </div>                    
      )
           }
         }

         )}   

    </div>       
       
  )
}

export default Slides;
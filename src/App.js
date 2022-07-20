
import Slides from './components/Slides';
import "materialize-css/dist/css/materialize.min.css"
import { useEffect, useState } from 'react';



function App() {

  const [prePage, setPrePage] = useState(-1);
  const [nextPage, setNextPage] = useState(0);

  // useEffect(()=>{
  //   console.log('we are on page index no.=', nextPage)
  //   console.log('pre page is=', prePage)
  // },[])

  function nextPageHandler(e){
     setNextPage((c)=>c+1)
     setPrePage((c)=>c+1)
     
  }
  function prePageHandler(e){
    setPrePage((c)=>c-1)
    setNextPage((c)=>c-1)
 
 }
 function resetHandler(){
  setPrePage(-1)
    setNextPage(0)
 }

  const slides = [
    { title:"First Page",
      text:"We are on first page"
    },
    {title:"Second Page",
      text:"We are on second page"
    },
    {title:"Third Page",
    text:"We are on second page"
  },
    {title:"Forth Page",
    text:"We are on second page"
  }
  ]
 
  return (
    <div className="container main">
      <div className="row center">
      
        <div className="col s12 m4 l4">
          <button className={prePage <0 ? "btn waves-effect waves-light disabled": "btn waves-effect waves-light"} type="submit" name="action" onClick={prePageHandler} value={prePage}>Previous
            <i className="material-icons left ">arrow_back</i>
          </button>
         </div>
         <div className="col s12 m4 4">
          <button className={prePage <0 ? "btn waves-effect waves-light disabled": "btn waves-effect waves-light red"} type="submit" name="action" onClick={resetHandler} value={prePage}>Reset
            <i className="material-icons left ">cached</i>
          </button>
         </div>
         <div className="col s12 m4 l4"> 
          <button className={nextPage === slides.length-1 ? "btn waves-effect waves-light disabled": "btn waves-effect waves-light"} type="submit" name="action" onClick={nextPageHandler} value={nextPage}>Next
            <i className="material-icons right">arrow_forward</i>
          </button>
        </div>
      </div>     
       <Slides slides={slides} prePage={prePage} nextPage={nextPage}/>
    </div>
    
  );
}

export default App;

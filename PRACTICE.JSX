// import './App.css'

import { useState, useEffect } from "react"

const Card = ({title})=>{

  const [hasLiked, sethasLiked]=useState(false);
  const[count, setcount]=useState(0);

  useEffect(()=>{
    console.log(`${title} has been liked: ${hasLiked}`);
  }, [hasLiked]);             //if dependency array is empty, it will me rendered on mount

  return(
    <div className="card" onClick={() => {
      setcount((prev)=> prev+1);
      }}>
      <h1>
        {title} <br/> {count || null}
      </h1 >


       <button onClick={()=> { 
          sethasLiked(!hasLiked);
        }}>
        {hasLiked? '❤': 'Like'}
        </button>

      {/* <button onClick={()=> {
        console.log(hasLiked);
        sethasLiked(!hasLiked);
        console.log(hasLiked);
        console.log(hasLiked);
        if(hasLiked==true){
          sethasLiked(false);
          console.log(hasLiked);
        }
        
        }}>
        {hasLiked? '❤': 'Like'}
        </button> */}

       
    </div>
  )

}


function App() {
  return(
    <div className="card-container" >
      <Card title="squid games " />
      <Card title="star wars" />
      <Card title="the lion king"/> 
    </div>
  )
  
}
export default App

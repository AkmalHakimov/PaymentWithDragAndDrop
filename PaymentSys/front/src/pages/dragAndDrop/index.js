import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";


export default function DragAndDrop() {

    const [currentFather,setCurrentFather] = useState("first");

  function handleDrop(type){
    setCurrentFather(type)
  }
  return (
    <div className="container my-5">
    <div className="d-flex" style={{height:"200px"}}>
        <div onDrop={()=>handleDrop("first")} onDragOver={(e)=>{e.preventDefault()}} className="bg-warning w-25 p-3">
          {
            currentFather==="first"?
            <div draggable={true}  className="bg-dark" style={{height:50,width:50,borderRadius:5}}></div>:""
          }
        </div>
        <div onDragOver={(e)=>{e.preventDefault()}} onDrop={()=>handleDrop("second")} className="bg-primary w-25 p-3">
         {
            currentFather==="second"?
            <div draggable={true}  className="bg-dark" style={{height:50,width:50,borderRadius:5}}></div>:""
          }
        </div>

        <div onDragOver={(e)=>{e.preventDefault()}} onDrop={()=>handleDrop("third")} className="bg-info w-25 p-3">
         {
            currentFather==="third"?
            <div draggable={true}  className="bg-dark" style={{height:50,width:50,borderRadius:5}}></div>:""
          }
        </div>
    </div>  
    </div>
  )
}

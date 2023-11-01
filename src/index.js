import React from "react";
import ReactDOM from "react-dom";  
import App from "./App";
import Sdata from "./Sdata";
import "./index.css"


ReactDOM.render(
  <>
  <h1 className="heading_style">List of top 5 Netflix series in 2023</h1>


{/* NORMAL FUNCTION  */}

  {/* {Sdata.map(function ncard(val){
    return(
    <App 
     imgsrc = {val.imgsrc}
     title={val.title}
     sname = {val.sname}
     link={val.link}
    /> 
  );
  })} */}


  {/* ARROW FUNCTION  */}

  {Sdata.map((val)=>{
    return(
    <App 
      key = {val.id}
     imgsrc = {val.imgsrc}
     title={val.title}
     sname = {val.sname}
     link={val.link}
    /> 
  );
  })}

  </>, document.getElementById('root')
);
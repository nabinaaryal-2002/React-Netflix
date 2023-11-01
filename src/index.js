import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Sdata from "./Sdata";
import "./index.css"
ReactDOM.render(
  <>
  <h1 className="heading_style">List of top 5 Netflix series in 2023</h1>

  <App 
  imgsrc = {Sdata[0].imgsrc}
  title={Sdata[0].title}
  sname = {Sdata[0].sname}
  link={Sdata[0].link}
  /> 
  <App 
  imgsrc = {Sdata[1].imgsrc}
  title={Sdata[1].title}
  sname = {Sdata[1].sname}
  link={Sdata[1].link}
  /> 
  <App 
  imgsrc = {Sdata[2].imgsrc}
  title={Sdata[2].title}
  sname = {Sdata[2].sname}
  link={Sdata[2].link}
  /> 

  </>, document.getElementById('root')
);
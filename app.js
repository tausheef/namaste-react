import React from "react";
import  ReactDOM  from "react-dom";

 const heading = React.createElement(
  "div",
  {id: "parent",},
  [React.createElement("div",{id:"child"},
  [React.createElement("h1",{},"helo madafaka1 🚀"),React.createElement("h1",{},"helo madafaka2")] 
  ),
  React.createElement("div",{id:"child"},
  [React.createElement("h1",{},"helo madafaka3"),React.createElement("h1",{},"helo madafaka4")] 
  )]
 );
 
 const root = ReactDOM.createRoot(document.getElementById("root"));

 root.render(heading);



 


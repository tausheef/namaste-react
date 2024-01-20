import React from "react";
import  ReactDOM  from "react-dom";

 

 const Title = () => (
 <h1 className="head" tabIndex="5">
    Namaste Reactt using Jsx🚀
 </h1>
 );

 // React Functional Componenets
 const HeadingComponenets = () => (
    <div id="container">
        <Title/>  {/* Name of other componenets also called components composition */}
   <h1 className="heading">Called me yourDaddy</h1>
   </div>
 )


 const root = ReactDOM.createRoot(document.getElementById("root"));


 root.render(<HeadingComponenets/>);

 




 


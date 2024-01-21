import React from "react";
import  ReactDOM  from "react-dom";
/* 
Header 
- logo 
- Nav Items
Body
- search Restruanant
- Container
- Restrunant Comtainer
Footer
- Copyrights
- Links
- Address
- Contact
*/
 
const Header = () => {
   return(
      <div className="header">
      <div className="logo-conatainer">
         <img className="logo" src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/restaurant-logo-design-template-6edd5759557bd031a870940c89a57f7c_screen.jpg?ts=1637164658"/>
      </div>
      <div className="nav-bar">
         <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Cart</li>
         </ul>
      </div>
      </div> 


   );
   
}

const Body = () => {
 
   return (
    <div className="body">
       <div className="search-bar">Search</div>
       <div className="res-container">
         //card-components 
       </div>
    </div>

   );


}


const App = () => {
   return (
  <div className="app">
   <Header/>
   </div>
   );
};


 const root = ReactDOM.createRoot(document.getElementById("root"));


 root.render(<App/>);

 




 


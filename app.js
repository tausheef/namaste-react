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

const Restaurantcard = (props) => {
 const {resName , cusine , stars , time } = props
   return (
    
      <div className="res-card">
         <img className="img-cont" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e33e1d3ba7d6b2bb0d45e1001b731fcf"/>
        <h3>{props.resName}</h3>
        <h4>{props.cusine}</h4>
        <h4>{props.stars}</h4>
        <h4>{props.time}</h4>
      </div>

   );

}

const Body = () => {
 
   return (
    <div className="body">
       <div className="search-bar">Search</div>
       <div className="res-container">
         <Restaurantcard resName="Mcdonalds" cusine="Burger , italian" stars="4.3 stars" time="38 minutes"/>
         <Restaurantcard resName="kfc" cusine="Fried Chicken , American"  stars="4.5 stars" time="30 minutes"/>
       </div>
    </div>

   );


}


const App = () => {
   return (
  <div className="app">
   <Header/>
   <Body/>
   </div>
   );
};


 const root = ReactDOM.createRoot(document.getElementById("root"));


 root.render(<App/>);

 




 


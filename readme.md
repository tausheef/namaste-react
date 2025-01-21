namaste react
important notes in js 

# Diff b/w npm and npx:
- NPM is a package manager that installs, updates, and removes JavaScript packages and dependencies for a project.
.........................................
- NPX is a package executor that runs JavaScript packages without installing them.

# Parcel
- Dev Build
- Local Server 
- HMR => Hot Module Replacement
- File watching Algorithim Written in C++
- Catching - Faster Builds
- Image Optimization
- Minification
- Building 
- Compressing File 
- Consisting Hasing
- Code Splitting 
- Diffrential Buildings - Support older Browser
- Diagnostic
- Error Handling 
- HTTPs
- Tree Shaking - remove unused code for you

# What is JSX
- JSX allows us to write HTML elements in JavaScript and place them in the DOM without any createElement() and/or appendChild() methods.

- Jsx is not Html in Js
- its look like html but  its not html
- for using attribute in jsx we use cameCase🐪
- JSX Transpiles the react code in react.CreateElement => ReactElement-JS object => htmlElement(render).

# React components

- There are two types of component 
- Class Based Componenets -- OLD
- Functional Components -- NEW,funtional components return jsx code,

 - React Functional Componenets
 const HeadingComponenets = () => {
    return <h1>hhhhh</h1>
 }
 - YOU CAN ALSO WRITE LIKE THIS :-
 const HeadingComponents2 = () => ( <h1>hello my dear friends</h1>)

 - you can use "{}" in jsx to write js expression code

 - {} --> you can use this to add react element in components

our frontend :-
# how its look,

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

<!--  const Title = () => (
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
  -->

  # Props
  - React Props. Props stand for "Properties." They are read-only components. It is an object which stores the value of attributes of a tag and work similar to the HTML attributes. It gives a way to pass data from one component to other components. It is similar to function arguments.

  # props example 
   # passing props 

  - <Restaurantcard resName="Mcdonalds" cusine="Burger , italian" stars="4.3 stars" time="38 minutes"/>
        // <Restaurantcard resName="kfc" cusine="Fried Chicken , American"  stars="4.5 stars" time="30 minutes"/>

   # Configuration-driven UI, 
    - also known as config-driven UI or configuration-based UI - When you build real a world application so you want should your website work in many country or many place we control our fontend it is known as using Config-Driven UI . API or Backend Driven which is data Comming from API.


    - config driven ui wo hai example agr tum chahte ho red clour bg delhi main ho , blue clour mumbai main and green kolkata main to tum use send kar sakte hai color as a config and this config will drive your UI

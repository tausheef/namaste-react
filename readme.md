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
    return <h1>Called me yourDaddy</h1>
 }
 - YOU CAN ALSO WRITE LIKE THIS :-
 const HeadingComponents2 = () => ( <h1>hello my dear friends</h1>)

 - you can use "{}" in jsx to write js expression code

 - {} --> you can use this to add react element in components

hello my name is saurav
//react element is just anobject
/*
<div id="parent">
    <div id="child1">
      <h1>heko madafaka1</h1>
      <h2>helo madafaka2</h2>
    </div>
    <div id="child2">
      <h1>helo madafaka3</h1>
      <h2>helo madafaka4</h2>
    </div>
</div>
*/ 
 const heading = React.createElement(
  "div",
  {id: "parent",},
  [React.createElement("div",{id:"child"},
  [React.createElement("h1",{},"helo madafaka1"),React.createElement("h1",{},"helo madafaka1")] 
  ),
  React.createElement("div",{id:"child"},
  [React.createElement("h1",{},"helo madafaka1"),React.createElement("h1",{},"helo madafaka1")] 
  )]
 );
 
 const root = ReactDOM.createRoot(document.getElementById("root"));

 root.render(heading);



 


import React from "react";
import ReactDOM from "react-dom/client";

const elem = <span>React Element</span>



const title = (
    <h1 className="head" tabIndex="5">
        {elem}
        Namaste React using JSX
        
    </h1>
);

const number = 10000;
// React functional Component

const HeadingComponent = () => (
    <div id="container">
      {title}
<h1 className="heading">Namaste REact FC</h1>
    </div>
);


const root = ReactDOM.createRoot(document.getElementById("root"));


root.render(<HeadingComponent />);

//BABEL - converting jsx to React.createElement

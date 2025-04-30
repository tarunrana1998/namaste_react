import React from "react";
import ReactDOM from "react-dom/client";
const heading = React.createElement("div", { data: "xyz" }, [
    React.createElement("h1", { data: "xyz" }, "Hello World again"),
    React.createElement("h1", { data: "xyz" }, "Hello World again"),
]);

const jsxheading = 
    <h1>Hello World <span>rocket</span> </h1>;

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(jsxheading);
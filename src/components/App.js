import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";
// import logo from "./logo.png";
// Header Component

// App Component combining all
const AppLayout = () => (
    <div>
        <Header />
        <Body />
        <Footer />
    </div>
);

// Render to root
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);

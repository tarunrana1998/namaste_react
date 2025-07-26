import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";
import Error from "./Error";
import { createBrowserRouter, RouterProvider , Outlet} from "react-router-dom";
// import logo from "./logo.png";
// Header Component

// App Component combining all
const AppLayout = () => (
    <div>
        <Header />
        <Outlet />

        <Footer />
    </div>
);

const appRouter = createBrowserRouter([
    {
        path: '/', element: <AppLayout />, errorElement: <Error />, children: [
            { path: '/', element: <Body /> },
            { path: '/about', element: <h1>About Us</h1> },
            { path: '/contact', element: <h1>Contact Us</h1> },
            { path: '/cart', element: <h1>Cart</h1> },
            { path: '/restaurant/:id', element: <h1>Restaurant Details</h1> },
        ]
    }
], {
    basename: '/swiggy'
});

// App component for default export
const App = () => <RouterProvider router={appRouter} />;
export default App;

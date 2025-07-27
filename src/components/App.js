import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";
import Error from "./Error";
import AboutUsCard from "./AboutUsCard";
import ContactUsCard from "./ContactUsCard";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import UserContext from "../utils/UserContext";
import { useState, useEffect } from "react";
// import logo from "./logo.png";
// Header Component

// App Component combining all
const AppLayout = () => {
    const [userName, setUserName] = useState();

    useEffect(() => {
        // Simulate fetching user data
        const name = "Tarun Rana"; // This could be fetched from an API
        setUserName(name);
    }, []);

    return (
        <UserContext.Provider value={{ userName, setUserName }}>
            <div>
                <Header />
                <Outlet />
                <Footer />
            </div>
        </UserContext.Provider>
    );
};

const appRouter = createBrowserRouter([
    {
        path: '/', element: <AppLayout />, errorElement: <Error />, children: [
            { path: '/', element: <Body /> },
            { path: '/about', element: <AboutUsCard /> },
            { path: '/contact', element: <ContactUsCard /> },
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

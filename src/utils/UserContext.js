import { createContext, useContext } from "react";

const UserContext = createContext({
    userName : "Tarun Rana",
});

export default UserContext;
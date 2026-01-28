import { createBrowserRouter } from "react-router-dom";
import LoginScreen from "./screens/loginScreen";

export const loginRoutes = [ 
  {
    path: "/login",
    element: <LoginScreen/>,
  },
]; 
import { createBrowserRouter } from "react-router-dom";
import LoginScreen from "./screens/loginScreen";

export const loginRoutes = createBrowserRouter([ 
  {
    path: "/login",
    element: <LoginScreen/>,
  },
]); 
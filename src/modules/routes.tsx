import { createBrowserRouter } from "react-router-dom";
import LoginScreen from "./screens/loginScreenTes";

export const loginRoutes = createBrowserRouter([ 
  {
    path: "/login",
    element: <LoginScreen/>,
  },
]); 
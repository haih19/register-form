import Login from "../pages/Login";
import Register from "../pages/Register";
const publicRoutes = [
   {path: "/", element: <Register />},
   {path: "/login", element: <Login />},
];

export {publicRoutes};

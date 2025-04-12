import Home from "./pages/Home/Home";
import NewUser from "./pages/NewUser/NewUser";
import Products from "./pages/Products/Products";
import UserList from "./pages/Users/UserList";

let routes = [
    { path: "/", element: <Home /> },
    { path: "/users", element: <UserList/>},
    { path: "/newUsers", element: <NewUser/>},
    { path: "/Products", element: <Products/>},
];

export default routes

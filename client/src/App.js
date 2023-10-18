import Home from "./page/Home";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Login from "./page/Login";
import Error from "./page/Error";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Register from "./page/Register";
import AddProduct from "./page/AddProduct";

function App() {
  const router = createBrowserRouter([
    { path: "/", element: <Home />, errorElement: <Error /> },

    { path: "/login", element: <Login /> },
    { path: "/register", element: <Register /> },
  ]);
  return (
    <>
      <Header />
      {/* <RouterProvider router={router} /> */}
      <AddProduct />
      <Footer />
    </>
  );
}

export default App;

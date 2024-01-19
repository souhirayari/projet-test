
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import HomePages from './pages/HomePage';
import AddAdmin from "./pages/AddAdmin";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePages />
    },
    {
      path: "/add",
      element: <AddAdmin />
    },
  ]);
  return (
    <>

      <ToastContainer position="top-center"
        reverseOrder={true} />
      <RouterProvider router={router} />

    </>
  )
}

export default App

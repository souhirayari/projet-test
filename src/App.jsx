
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import HomePages from './pages/HomePage';
import AddAdmin from "./pages/AddAdmin";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePages/>
    },
    {
      path: "/add",
      element: <AddAdmin />
    },
  ]);
  return (
    <>
          <RouterProvider router={router} />

    </>
  )
}

export default App

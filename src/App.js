import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./layout/Main";
import Home from "./Pages/Home/Home";
import ProjectDetails from "./Pages/Home/Projects/ProjectDetails";

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: '/project/:id',
          element: <ProjectDetails></ProjectDetails>,
          loader: () => fetch(`Data.json`)
        }
      ]
    }
  ])
  return (
    <div>

      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;

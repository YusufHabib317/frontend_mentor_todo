import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Home from "./pages/Home/Home";
import Index from "./pages/Home/Index";

const router = createBrowserRouter([
  {
    path: "/frontMentor_todo_app",
    element: <Home />,

    children: [{ index: true, element: <Index /> }],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;

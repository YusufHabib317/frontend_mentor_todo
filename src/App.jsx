import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Home from "./pages/Home/Home";
import Index from "./pages/Home/Index";

const router = createBrowserRouter([
  {
    path: "/frontend_mentor_todo",
    element: <Home />,

    children: [{ index: true, element: <Index /> }],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;

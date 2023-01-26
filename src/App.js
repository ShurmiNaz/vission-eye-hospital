import { RouterProvider } from "react-router-dom";
import router from "./Route/Routes/Route";


function App() {
  return (
    <div className="max-w-full  ">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;

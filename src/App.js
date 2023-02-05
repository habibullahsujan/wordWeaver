import React from "react";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";

import "./App.css";
import { store } from "./Redux/store";
import { routes } from "./Routes/routes";


function App() {
  return <div>
   <Provider store={store}>
   <RouterProvider router={routes}/>
   </Provider>
  </div>;
}

export default App;

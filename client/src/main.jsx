// import { createRoot } from "react-dom/client";
// import { RouterProvider } from "react-router-dom";
// import { router } from "./router1/Router";
// import App from "./App";
// import "./index.css";
// import "./styles/Globalstyle.css"
// import { Toaster } from "react-hot-toast";


// createRoot(document.getElementById("root")).render(
//   <RouterProvider router={router}>
//       <App />
//       <Toaster />
//   </RouterProvider>
// );

import { createRoot } from "react-dom/client";
import "./index.css";
import { Provider } from 'react-redux'
import { store } from "./redux/store";
import App from "./App";


createRoot(document.getElementById("root")).render(
    <Provider store={store}>
        <App />
    </Provider>
);

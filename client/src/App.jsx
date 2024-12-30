// import React from 'react'

// function App() {
//   return (
//     <div>
//       <h1>Hello World</h1>
//     </div>
//   )
// }

// export default App

import { RouterProvider } from "react-router-dom";
import { router } from "./router1/Router";
import { Toaster } from "react-hot-toast";



function App() {
    return (
        <>
            <RouterProvider router={router} />
            <Toaster />
        </>
    );
}

export default App;
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {publicRoutes} from "./routes/index";
import {DefaultLayout} from "./components/Layout/index";

import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
   return (
      <Router>
         <div className="App">
            <Routes>
               {publicRoutes.map((route, index) => {
                  const Layout = route.layout || DefaultLayout;

                  return (
                     <Route
                        key={index}
                        path={route.path}
                        element={<Layout>{route.element}</Layout>}
                     />
                  );
               })}
            </Routes>
         </div>
         <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
         />
         {/* Same as */}
         <ToastContainer />
      </Router>
   );
}

export default App;

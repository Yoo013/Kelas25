import { Route, Routes, Navigate } from "react-router-dom";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


import App2 from "./App2";
import App3 from "./App3";


function App() {
  const user = localStorage.getItem("token");

  return (
    <>
      <Routes>
        <Route path="/" element={<App3/>} />
        <Route path="/home" element={<App2/>} />
      
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;

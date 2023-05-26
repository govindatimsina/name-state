import { createBrowserRouter, Routes, Route, createRoutesFromElements, RouterProvider } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Navbar from "./Navbar";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Navbar/>}>
      <Route index element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="contact" element={<Contact/>}/>
    </Route>
  )
)

function App() {
  return (
    <>
    {/* <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route index element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="contact" element={<Contact/>}/>
    </Routes>
    </BrowserRouter> */}
    
    <RouterProvider router={router}/>
    </>
  );
}

export default App;

import React from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./Component/Sidebar";
import Publication from "./Component/Publication";
import Education from "./Component/Education";
import Blog from "./Component/Blog";
import "./App.css";
import About from "./Component/About";
import CV from "./Component/CV";
import Teaching from "./Component/Teaching";
import Contact from "./Component/Contact";
import Artistic from "./Component/Artistic";
import Footer from "./Component/footer";
import Blog1 from "./Component/Blog1";

function App() {
  return (
    <div className="app-container">
      <Sidebar />
      <div className="container container-fluid">
        <Routes>
          <Route path="/" element={<About />}></Route>
          <Route path="publication" element={<Publication />}></Route>
          <Route path="education" element={<Education />}></Route>
          <Route path="teaching" element={<Teaching />}></Route>
          <Route path="blog" element={<Blog />}></Route>
          <Route path="cv" element={<CV />}></Route>
          <Route path="contact" element={<Contact />}></Route>
          <Route path="artistic" element={<Artistic />}></Route>
          <Route path="blog1" element={<Blog1 />}></Route>
        </Routes>
      </div>
      <Footer />
    </div>
  );
}
export default App;

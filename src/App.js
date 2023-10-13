import logo from "./logo.svg";
import "./App.css";
import Header from "./common/Header";
import Footer from "./common/Footer";

import { Routes, Route } from "react-router-dom";
import Service from "./components/Service";
import ContactUs from "./components/Contact";
import Home from "./components/Home";

function App() {
  return (
    <>
      <Header />
      <Routes>

        
      <Route path="/" element={<Home/>}>
          <Route index element={<Home />} />
         
          {/* <Route path="*" element={<NoPage />} /> */}
        </Route>
        <Route path="/service" element={<Service />} />
          <Route path="/contact" element={<ContactUs />} />
        
      </Routes>
      <Footer />
    </>
  );
}

export default App;

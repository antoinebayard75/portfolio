import './App.scss';
import Header from "./components/header/Header";
import Home from "./components/pages/home/Home";
import Contact from "./components/pages/contact/Contact"
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
      <BrowserRouter>
        <div className="App">
          <Header></Header>
            <Routes>
                <Route index element={<Home />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>

        </div>
      </BrowserRouter>
  );
}

export default App;

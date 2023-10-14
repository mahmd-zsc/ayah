import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/header/header";
import Home from "./components/home/home";

function App() {
  return (
    <>
      <div className=" bg-mainBlue min-h-screen  ">
        <div className=" container">
          <Header />
          <div>
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Home />} />
              </Routes>
            </BrowserRouter>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

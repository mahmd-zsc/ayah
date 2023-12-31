import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./animate.css";
import Header from "./components/header/header";
import Home from "./components/home/home";
import Surah from "./components/surah/surah";
import SearchPage from "./components/searchPage/searchPage";
import Arrow from "./components/arrow/arrow";
import Audio from "./components/audio/audio";
import Tafser from "./components/tafser/tafser";
import Footer from "./components/footer/footer";
import Info from "./components/information/info";

function App() {
  return (
    <>
      <div className="   relative text-mainText     ">
        <div>
          <BrowserRouter>
            <Header />
            <Arrow />
            <Audio />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path=":surahId" element={<Surah />} />
              <Route path=":surahId/info" element={<Info />} />
              <Route path="/search" element={<SearchPage />} />
              <Route path="/tafser" element={<Tafser />} />
            </Routes>
            <Footer />
          </BrowserRouter>
        </div>
      </div>
    </>
  );
}

export default App;

import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import "./animate.css";
import Header from "./components/header/header";
import Home from "./components/home/home";
import pattern from "./components/images/pattern.png";
import { Provider } from "react-redux";
import { store } from "./components/redux/store";
import Surah from "./components/surah/surah";
import SearchPage from "./components/searchPage/searchPage";

function App() {
  return (
    <>
      <div className="   relative   ">
        <Provider store={store}>
          <Header />
          <div>
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path=":surahId" element={<Surah />} />
                <Route path="/search" element={<SearchPage />} />
              </Routes>
            </BrowserRouter>
          </div>
          {/* <img className=" absolute w-[60%] h-screen top-0 left-0 opacity-[2%] -z-10 " src={pattern} alt="" /> */}
        </Provider>
      </div>
    </>
  );
}

export default App;

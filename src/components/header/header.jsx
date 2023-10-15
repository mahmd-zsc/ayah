import React, { useEffect } from "react";
import menuImg from "../images/heder/menu.png";
import MenuBar from "../header/menuBar";
import { useDispatch, useSelector } from "react-redux";
import { fetchSurahList } from "../redux/suraList/suraListAction";
import { changeMenuMode } from "../redux/settings/settingsActions";
import { fetchSurahSearch } from "../redux/surahSearch/suraSearchAction";
function Header() {
  let dispatch = useDispatch();
  let handleMenuOpen = () => {
    dispatch(changeMenuMode(true));
  };
  return (
    <div className=" relative    ">
      <div className="container flex justify-between items-center py-6">
        <h1 className=" text-mainCreme font-bold uppercase">title</h1>
        <img onClick={handleMenuOpen} className=" w-8" src={menuImg} alt="" />
      </div>
      <MenuBar />
      <div className=" header-bg bg-darkBlue absolute top-0 left-0 h-20 w-full -z-10"></div>
    </div>
  );
}

export default Header;

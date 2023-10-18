import React, { useEffect, useRef, useState } from "react";
import menuImg from "../../../images/heder/menu.png";
import MenuBar from "../header/menuBar";
import { useDispatch, useSelector } from "react-redux";
import { changeMenuMode } from "./../../../redux/settings/settingsActions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faGlobe } from "@fortawesome/free-solid-svg-icons";
import Language from "./language";
import { useLocation, useNavigate, useParams } from "react-router-dom";

function Header() {
  let [languageOpen, setLanguageOpen] = useState(false);
  let menu = useRef();
  let language = useRef();
  let pathname = useLocation().pathname;

  let dispatch = useDispatch();
  let handleMenuOpen = () => {
    dispatch(changeMenuMode(true));
  };

  return (
    <div className={` relative  ${pathname === "/" ? null : "bg-mainBlue"}   `}>
      <div className="container flex justify-between items-center py-6">
        <div className=" flex justify-start items-center gap-2">
          <FontAwesomeIcon
            className=" cursor-pointer"
            onClick={handleMenuOpen}
            ref={menu}
            icon={faBars}
            style={{ color: "gray" }}
            size="xl"
          />
          <h1 className=" text-mainCreme font-bold uppercase">title</h1>
        </div>
        <div className=" relative">
          <FontAwesomeIcon
            ref={language}
            className=" cursor-pointer"
            onClick={() => setLanguageOpen(!languageOpen)}
            icon={faGlobe}
            style={{ color: "gray" }}
            size="xl"
          />
          <Language
            languageOpen={languageOpen}
            languageIcon={language}
            setLanguageOpen={setLanguageOpen}
          />
        </div>
      </div>
      <MenuBar menuImg={menu} />
      <div className=" header-bg bg-darkBlue absolute top-0 left-0 h-20 w-full -z-10"></div>
    </div>
  );
}

export default Header;

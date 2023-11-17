import React, { useEffect, useRef, useState } from "react";
import menuImg from "../../../images/heder/menu.png";
import MenuBar from "../header/menuBar";
import { useDispatch, useSelector } from "react-redux";
import {
  changeMenuMode,
  changeSettingMenu,
} from "./../../../redux/settings/settingsActions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faGear, faGlobe } from "@fortawesome/free-solid-svg-icons";
import Language from "./language";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import Settings from "./settings/settings";

function Header() {
  let [languageOpen, setLanguageOpen] = useState(false);
  let menu = useRef();
  let language = useRef();
  let settings = useRef();
  let pathname = useLocation().pathname;
  // let state = useSelector((state) => state);
  let handleOpenLanguage = () => {
    setLanguageOpen(!languageOpen);
    
  };
  let dispatch = useDispatch();
  let handleMenuOpen = () => {
    dispatch(changeMenuMode(true));
  };
  let handleOpenSetting = () => {
    dispatch(changeSettingMenu(true));
  };
  return (
    <div
      className={` header relative  ${
        pathname === "/" ? null : "bg-mainBlue"
      }   `}
    >
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
          <Link to="/">
            <h1 className=" text-mainCreme font-bold uppercase">ayah</h1>
          </Link>
        </div>
        <div className="   ">
          <div className="relative flex items-center gap-4">
            {/* <div className=" relative">
              <FontAwesomeIcon
                ref={language}
                className=" cursor-pointer"
                onClick={handleOpenLanguage}
                icon={faGlobe}
                style={{ color: "gray" }}
                size="xl"
              />

              <Language
                languageOpen={languageOpen}
                languageIcon={language}
                setLanguageOpen={setLanguageOpen}
              />
            </div> */}
            <div>
              <FontAwesomeIcon
                onClick={handleOpenSetting}
                ref={settings}
                className=" settingsIcon cursor-pointer"
                icon={faGear}
                style={{ color: "gray" }}
                size="xl"
              />
              <Settings settingsIcon={settings} />
            </div>
          </div>
        </div>
      </div>
      <MenuBar menuImg={menu} />
      <div className=" header-bg bg-darkBlue absolute top-0 left-0 h-20 w-full -z-10"></div>
    </div>
  );
}

export default Header;

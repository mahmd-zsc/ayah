import React, { useEffect, useRef } from "react";
import "animate.css";
import { useDispatch, useSelector } from "react-redux";
import pattern from "../../../images/pattern.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDeleteLeft,
  faHouse,
  faHandsHolding,
  faBookOpen,
} from "@fortawesome/free-solid-svg-icons";
import { changeMenuMode } from "../../../redux/settings/settingsActions";
import { useNavigate } from "react-router-dom";
function MenuBar({ menuImg }) {
  let menu = useRef();
  let navigate = useNavigate();
  let settings = useSelector((state) => state.settings);
  let dispatch = useDispatch();

  let nav = [
    {
      fontAwesome: faHouse,
      title: "home ",
      to: "/",
    },
    {
      fontAwesome: faHandsHolding,
      title: "supplications ",
      to: "/supplications",
    },
    {
      fontAwesome: faBookOpen,
      title: "tafser ",
      to: "/tafser",
    },
  ];
  let handleClose = () => {
    dispatch(changeMenuMode(false));
  };
  let handleTo = (i) => {
    navigate(i);
    dispatch(changeMenuMode(false));
  };
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        !menu.current.contains(event.target) &&
        !menuImg.current.contains(event.target)
      ) {
        dispatch(changeMenuMode(false));
      }
    };

    window.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);
  useEffect(() => {
    if (settings.menu === true) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [settings.menu]);

  return (
    <>
      <div
        ref={menu}
        className={`  fixed py-6    top-0 left-0   bg-darkBlue h-screen shadow-lg text-white shadow-black  duration-300 z-40   ${
          !settings.menu
            ? " w-0 sm:w-0 "
            : "w-full sm:w-[340px] animate__animated animate__fadeInLeft"
        }   `}
      >
        <div
          className={` flex justify-between items-center mb-4 px-4 ${
            !settings.menu ? " hidden" : null
          }`}
        >
          <h1 className=" text-mainCreme font-bold uppercase">title</h1>

          <FontAwesomeIcon
            className=" cursor-pointer  "
            onClick={handleClose}
            ref={menu}
            icon={faDeleteLeft}
            style={{ color: "gray" }}
            rotation={180}
            size="xl"
          />
        </div>
        <div className="line w-full h-[2px] bg-mainBlue"></div>
        <div
          className={` grid grid-cols-1 gap-px my-10 mx-4 bg-mainBlue ${
            !settings.menu ? " hidden" : null
          }  `}
        >
          {nav.map((n, index) => (
            <div
              key={index}
              onClick={() => handleTo(n.to)}
              className="linkNav flex items-center gap-2 py-2 text-gray-400 hover:text-white cursor-pointer bg-darkBlue "
            >
              <FontAwesomeIcon
                className="hoverWhite" // Add a class name for easy targeting
                ref={menu}
                icon={n.fontAwesome}
                size="sm"
              />
              <h5 className="text-sm uppercase font-bold">{n.title}</h5>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default MenuBar;

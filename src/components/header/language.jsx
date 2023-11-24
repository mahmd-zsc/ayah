import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeLanguage } from "../../redux/settings/settingsActions";

function Language({ languageOpen, setLanguageOpen, languageIcon }) {
  let languageMenu = useRef();
  let dispatch = useDispatch();
  let langId = useSelector((state) => state.settings.language);

  let language = [
    {
      lang: "en",
      text: "english",
    },
    {
      lang: "ar",
      text: "العربية",
    },
  ];
  let handleLanguage = (index) => {
    window.localStorage.language = index;
    console.log(index);
  };
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        languageIcon &&
        languageIcon.current &&
        languageMenu &&
        languageMenu.current &&
        !languageIcon.current.contains(event.target) &&
        !languageMenu.current.contains(event.target)
      ) {
        setLanguageOpen(false);
      }
    };

    window.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, [languageIcon, languageMenu, setLanguageOpen]);
  useEffect(() => {
    let lan = document.querySelector(`#${langId}`);
    if (lan) {
      lan.classList.add("active");
    }
  });
  return (
    languageOpen && (
      <div
        ref={languageMenu}
        className=" languageMenu  absolute px-2 py-4 flex flex-col md:w-40  lg:w-36    gap-1 bg-mainBlue sm:left-1/2 sm:right-auto right-0  top-8 sm:-translate-x-1/2 shadow-sm shadow-black z-40 rounded-lg  "
      >
        {language.map((l, index) => (
          <div
            onClick={(e) => dispatch(changeLanguage(e.target.id))}
            id={l.lang}
            key={index}
            className=" text-white px-4 py-1   hover:bg-darkBlue  rounded-lg cursor-pointer uppercase "
          >
            {l.text}
          </div>
        ))}
      </div>
    )
  );
}

export default Language;

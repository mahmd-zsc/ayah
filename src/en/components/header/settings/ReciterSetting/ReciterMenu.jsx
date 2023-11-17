import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeSettingPage } from "../../../../../redux/settings/settingsActions";

function ReciterMenu() {
  let dispatch = useDispatch();
  let translationsSetting = useSelector(
    (state) => state.settings.translationSettingOpen
  );
  let dataOfTranslations = useSelector((state) => state.tanslationsNames);

  return (
    <>
      <div className=" px-4 flex items-center gap-2       ">
        <FontAwesomeIcon
          onClick={() => dispatch(changeSettingPage("main"))}
          size="lg"
          className=" opacity-80 hover:opacity-100 duration-300 hover:bg-mainBlue px-2 py-1 rounded-lg cursor-pointer "
          icon={faArrowLeft}
        />{" "}
        <h1 className=" text-mainCreme font-bold uppercase">Reciter</h1>
      </div>
      {/* {translationsSetting && (
        <>
          {dataOfTranslations.data && dataOfTranslations.data.length > 0 && (
            <div className="   ">
              <form
                className=" grid grid-cols-1 gap-1"
                onChange={(e) => console.log(e.target.id)}
                action=""
              >
                {dataOfTranslations.data.map((t, index) => (
                  <div
                    className=" flex flex-nowrap items-center h-5   "
                    key={index}
                  >
                    <input type="radio" name="translationOption" id={t.id} />
                    <label htmlFor={t.id} className=" flex-1 inline">
                      {t.name}
                    </label>
                  </div>
                ))}
              </form>
            </div>
          )}
        </>
      )} */}
    </>
  );
}

export default ReciterMenu;

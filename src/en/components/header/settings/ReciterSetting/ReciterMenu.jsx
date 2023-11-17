import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeSettingPage } from "../../../../../redux/settings/settingsActions";
import { changeAuthorId } from "../../../../../redux/translations/translationsAction";
import { changeReciterId } from "../../../../../redux/audio/audioAction";

function ReciterMenu() {
  let dispatch = useDispatch();
  let translationsSetting = useSelector(
    (state) => state.settings.translationSettingOpen
  );
  let ReciterId = useSelector((state) => state.audio.ReciterId);
  let dataOfReciter = useSelector((state) => state.ReciterNames);
  console.log(dataOfReciter);

  return (
    <>
      <div className=" TranslationMenu flex flex-col h-[700px]  ">
        <div className="  flex items-center gap-2 mb-4  px-4       ">
          <FontAwesomeIcon
            onClick={() => dispatch(changeSettingPage("main"))}
            size="lg"
            className=" opacity-80 hover:opacity-100 duration-300 hover:bg-mainBlue px-2 py-1 rounded-lg cursor-pointer "
            icon={faArrowLeft}
          />{" "}
          <h1 className=" text-mainCreme font-bold uppercase">Reciter</h1>
        </div>
        <div className="line w-full h-[2px] bg-mainBlue"></div>

        {dataOfReciter.data && dataOfReciter.data.length > 0 && (
          <div className="TranslationMenu grid grid-cols-1 gap-px bg-mainBlue  mb-2  flex-1 h-full overflow-y-scroll ">
            {dataOfReciter.data.map((t, index) => (
              <div
                onClick={() => dispatch(changeReciterId(t.id))}
                key={index}
                className={` bg-darkBlue hover:bg-mainBlue duration-300 text-gray-200 hover:text-white cursor-pointer px-4 py-4 ${
                  t.id === ReciterId ? "bg-mainBlue text-white" : null
                }`}
              >
                {t.reciter_name.substring(0, 30)}
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default ReciterMenu;

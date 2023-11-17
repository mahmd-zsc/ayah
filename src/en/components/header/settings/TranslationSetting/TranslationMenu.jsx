import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeSettingPage } from "../../../../../redux/settings/settingsActions";
import { changeAuthorId } from "../../../../../redux/translations/translationsAction";

function TranslationMenu() {
  let dispatch = useDispatch();
  let translationsSetting = useSelector(
    (state) => state.settings.translationSettingOpen
  );
  let translationId = useSelector((state) => state.translations.authorId);
  let dataOfTranslations = useSelector((state) => state.tanslationsNames);

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
          <h1 className=" text-mainCreme font-bold uppercase">Translation</h1>
        </div>
        <div className="line w-full h-[2px] bg-mainBlue"></div>

        {dataOfTranslations.data && dataOfTranslations.data.length > 0 && (
          <div className="TranslationMenu grid grid-cols-1 gap-px bg-mainBlue  mb-2  flex-1 h-full overflow-y-scroll ">
            {dataOfTranslations.data.map((t, index) => (
              <div
                onClick={() => dispatch(changeAuthorId(t.id))}
                key={index}
                className={` bg-darkBlue hover:bg-mainBlue duration-300 text-gray-200 hover:text-white cursor-pointer px-4 py-4 ${t.id === translationId ? "bg-mainBlue text-white" : null}`}
              >
                {t.name.substring(0, 30)}
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default TranslationMenu;

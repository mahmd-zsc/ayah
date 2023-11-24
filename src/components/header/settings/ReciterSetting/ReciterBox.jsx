import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeSettingPage } from "../../../../redux/settings/settingsActions";

function ReciterBox() {
  let dispatch = useDispatch();

  return (
    <div className=" ">
      <div className="flex flex-col gap-2   ">
        <p>Reciter</p>
        <div
          onClick={() => dispatch(changeSettingPage("reciter"))}
          className=" flex items-center justify-between py-4 bg-mainBlue  px-2 rounded-md cursor-pointer overflow-hidden  "
        >
          <div>
            <p className=" capitalize text-xs opacity-50">selected Reciter</p>
            <p className=" text-xs font-bold inline ">
              {/* {dataOfTranslations.data[1].name} */}
            </p>
          </div>
          <FontAwesomeIcon icon={faAngleRight} />
        </div>
      </div>
    </div>
  );
}

export default ReciterBox;

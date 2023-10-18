import React, { useEffect, useRef, useState } from "react";
import arrowImage from "../../images/arrow.png"; // Rename the imported image variable
function Arrow() {
  let [arrow, setArrow] = useState(false);
  let arrowRef = useRef();
  let handleClick = () => {
    window.scrollTo({
      top: "0",
      behavior: "smooth",
    });
  };
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 600) {
        setArrow(true);
      } else {
        setArrow(false);
      }
    });
  }, []);
  return (
    arrow && (
      <div className="relative container z-30">
        <div className="fixed right-10 bottom-5 hover:scale-110 duration-300">
          <img
            onClick={handleClick}
            className=" relative w-12 cursor-pointer animate__animated  animate__tada    "
            src={arrowImage} // Use arrowImage instead of arrow
            alt=""
          />
        </div>
      </div>
    )
  );
}

export default Arrow;

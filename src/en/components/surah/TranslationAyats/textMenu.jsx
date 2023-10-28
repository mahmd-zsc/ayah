import { faCopy, faEllipsis } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useRef, useState } from "react";

function TextMenu({ ayaText }) {
  const textAreaRef = useRef(null);
  const iconRef = useRef();
  const menuRef = useRef();
  const [openMenu, setOpenMenu] = useState(false);

  const handleCopyText = () => {
    if (textAreaRef.current) {
      textAreaRef.current.select();
      document.execCommand("copy");
    }
    setOpenMenu(false);
  };

  const list = [
    {
      text: "Copy Text",
      icon: faCopy,
      action: handleCopyText,
    },
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        iconRef.current &&
        !iconRef.current.contains(event.target) &&
        !menuRef.current.contains(event.target)
      ) {
        setOpenMenu(false);
      }
    };

    window.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);
  useEffect(() => {
    if (openMenu === true) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [openMenu]);
  return (
    <div className="relative">
      <FontAwesomeIcon
        ref={iconRef}
        onClick={() => setOpenMenu(!openMenu)}
        className="hover:text-[#1f9386] cursor-pointer"
        icon={faEllipsis}
      />
      {openMenu && (
        <div
          ref={menuRef}
          className="absolute right-0 md:left-1/2 top-6 md:-translate-x-1/2 bg-mainBlue z-10 py-2 px-1 w-40 rounded-md"
        >
          {list.map((l) => (
            <div
              onClick={l.action}
              className="flex items-center px-2 py-1 gap-2 hover:bg-darkBlue text-sm hover:text-white cursor-pointer rounded-md"
            >
              <FontAwesomeIcon icon={l.icon} />
              <p className="">{l.text}</p>
            </div>
          ))}
        </div>
      )}

      {/* Hidden textarea for copying text */}
      <textarea
        ref={textAreaRef}
        defaultValue={ayaText}
        style={{ position: "absolute", left: "-9999px" }}
      />
    </div>
  );
}

export default TextMenu;

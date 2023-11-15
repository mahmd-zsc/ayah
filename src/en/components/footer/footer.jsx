import React from "react";
import icon from "../../../images/muslim.png";
import linkedIn from "../../../images/icons/linkedin.png";
import github from "../../../images/icons/github.png";
import gmail from "../../../images/icons/envelope.png";
import whatsApp from "../../../images/icons/whatsapp.png";
import pattern from "../../../images/pattern.png";

function Footer() {
  return (
    <footer className=" ">
      <div className="  container    ">
        <div className=" flex flex-col md:flex-row justify-between gap-4 md:gap-0 items-center  bg-mainBlue py-5 px-2 relative overflow-hidden">
        <img className=" absolute top-0 left-0 min-w-full opacity-[2%]  "  src={pattern} alt="" />
          <div>
            <p className=" relative text-gray-400 text-center sm:text-left z-10">
              Engage in the timeless pursuit of comprehending The Noble Quran.
            </p>
          </div>
          <ul className="flex gap-2 relative   justify-center z-10  ">
            <li>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/mohamed-mahmound-b160b2270/"
              >
                <img className="w-5 h-5 " src={linkedIn} alt="" />
              </a>
            </li>
            <li>
              <a target="_blank" href="https://github.com/mahmd-zsc">
                <img className="w-5 h-5 " src={github} alt="" />
              </a>
            </li>
            <li>
              <a target="_blank" href="mailto:moma8607914@gmail.com">
                <img className="w-5 h-5 " src={gmail} alt="" />
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://api.whatsapp.com/send?phone=0201062003803"
              >
                <img className="w-5 h-5 " src={whatsApp} alt="" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

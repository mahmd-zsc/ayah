import React from "react";
import icon from "../../../images/muslim.png";
import linkedIn from "../../../images/icons/linkedin.png";
import github from "../../../images/icons/github.png";
import gmail from "../../../images/icons/envelope.png";
import whatsApp from "../../../images/icons/whatsapp.png";

function Footer() {
  return (
    <footer className="  ">
      <div className="container  ">
        {/* <div className="line h-px bg-mainBlue my-4"></div> */}
        <div className=" flex flex-col md:flex-row justify-between gap-4 md:gap-0 items-center  bg-mainBlue py-5 px-2">
          <div>
            <p className=" text-gray-400 text-center sm:text-left">
              Engage in the timeless pursuit of comprehending The Noble Quran,
            </p>
          </div>
          <ul className="flex gap-2   justify-center  ">
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

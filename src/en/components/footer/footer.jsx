import React from "react";
// import icon from "../../../../images/decoration.png"
function Footer() {
  return (
    <footer className=" bg-darkBlue pb-10">
      <div className="container">
        {/* <div className="line h-px bg-mainBlue my-4"></div> */}
        <div className="  grid grid-cols-1 md:grid-cols-2">
          <div>
            <p className=" text-gray-400">
              <span className=" block text-white text-lg pb-2 ">
                Read, study, and learn The Noble Quran.
              </span>
              Title is a Sadaqah Jariyah. We hope to make it easy for everyone
              to read, study, and learn The Noble Quran. The Noble Quran has
              many names including Al-Quran Al-Kareem, Al-Ketab, Al-Furqan,
              Al-Maw'itha, Al-Thikr, and Al-Noor.
            </p>
          </div>

          {/* <img className=" bg-mainBlue" src={icon} alt="" /> */}
        </div>
      </div>
    </footer>
  );
}

export default Footer;

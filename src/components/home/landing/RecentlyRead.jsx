import React from "react";

function RecentlyRead() {
  // Generate an array of length 3 to create three empty elements
  const recentlyReadItems = Array.from({ length: 4 });

  return (
    <div className="mt-20 mb-10 w-full flex-1">
      <h4 className="mb-2">Recently Read</h4>
      <div className="line w-full h-[2px] bg-mainBlue"></div>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-5 mt-5">
        {recentlyReadItems.map((item, index) => (
          <div
            key={index} // You should provide a unique key for each element in the array
            className=" box relative h-40 bg-mainBlue rounded-lg hover:border-2 border-lightBlue shadow-md duration-150 hover:translate-y-1 "
          ></div>
        ))}
      </div>
    </div>
  );
}

export default RecentlyRead;

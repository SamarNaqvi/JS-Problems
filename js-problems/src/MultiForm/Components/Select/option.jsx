import React from "react";
import { RiDeleteBin6Line } from "react-icons/ri";

function Option({id, value, removeOptionHandler, itemOptionsChangeHandler, isCheckbox=false}) {
  return (

      <div className="flex justify-between mb-2">
        <div className="flex w-full gap-2">
          {isCheckbox && (<input type="checkbox"/>)}
        <input
          className="focus:outline-none bg-white border border-gray-300 w-full p-2 rounded "
          type="text"
          value={value}
          onChange={({ target: { value } }) => {itemOptionsChangeHandler(id, value)}}
        />
        </div>
        <div className="flex items-center ml-2">
          <RiDeleteBin6Line onClick={() => {removeOptionHandler(id)}} />
        </div>
    </div>
  );
}

export default Option;

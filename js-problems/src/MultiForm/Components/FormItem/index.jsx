import React from "react";
import { getHeadingText } from "../../util";

function FormItem({ icon, text, addItemHandler }) {
  return (
    <div
      className=" flex flex-col justify-center items-center rounded p-2 border-gray-300 border w-28 hover:cursor-pointer hover:border-gray-400"
      onClick={() => addItemHandler({itemType: text, heading:getHeadingText(text), options:[], value:""})}
    >
      {icon}
      {text}
    </div>
  );
}

export default FormItem;

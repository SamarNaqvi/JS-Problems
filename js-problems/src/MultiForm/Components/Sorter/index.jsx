import React, { useContext } from "react";
import { FaArrowDown, FaArrowUp } from "react-icons/fa6";
import { FormItemsContext } from "../../Context/FormItemsContext";

function Sorter({ index }) {
  const { formItems, setFormItems } = useContext(FormItemsContext);

  return (
    <div className="flex flex-col items-center gap-2 p-2">
      <FaArrowUp
        className={`${index === 0 ? "fill-gray-300" : ""} cursor-pointer`}
        onClick={() => {
          if (index > 0) {
            const newItems = [...formItems];
            const currItem = newItems[index];
            newItems.splice(index, 1);
            newItems.splice(index - 1, 0, currItem);
            setFormItems(newItems);
          }
        }}
      />
      <FaArrowDown
        className={`${index === formItems.length - 1 ? "fill-gray-300" : ""} cursor-pointer`}
        onClick={() => {
          if (index < formItems.length - 1) {
            const newItems = [...formItems];
            const currItem = newItems[index];
            newItems.splice(index, 1);
            newItems.splice(index + 1, 0, currItem);
            setFormItems(newItems);
          }
        }}
      />
    </div>
  );
}

export default Sorter;

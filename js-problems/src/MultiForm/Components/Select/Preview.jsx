import React, { useContext } from "react";
import { FormItemsContext } from "../../Context/FormItemsContext";
import { itemChangeHandler } from "../../util";

function Preview({ id, heading, isRequired }) {
  const { formItems, setFormItems } = useContext(FormItemsContext);
  const currIndx = formItems.findIndex((item) => item.id === id);
  const options = formItems[currIndx]?.options;

   const itemOptionChangeHandler = (val) => {
      let newOptions = [...options];
      const ind = newOptions.findIndex((option) => option.value === val);
      if (ind == -1) return;
      newOptions[ind].selected = true;
      itemChangeHandler("options", newOptions, formItems, setFormItems, currIndx);
    };
  return (
    <div className="py-3">
      <label for={id} className={`${isRequired ? "required-field" : ""}`}>{heading}</label>
      <select className="flex flex-col w-full border p-2 border-gray-300 rounded" onChange={({target:{value}})=>itemOptionChangeHandler(value)}>
        {options?.map((option) => (
          <option className="p-2">{option.value}</option>
        ))}
      </select>
    </div>
  );
}

export default Preview;

import React, { useContext } from "react";
import { FormItemsContext } from "../../Context/FormItemsContext";
import { itemChangeHandler } from "../../util";

function Preview({ id, heading, isRequired }) {
  const { formItems, setFormItems } = useContext(FormItemsContext);
  const currIndx = formItems.findIndex((item) => item.id === id);
  const options = formItems[currIndx]?.options;

  const itemOptionChangeHandler = (val, newId) => {
    let newOptions = [...options];
    const ind = newOptions.findIndex((option) => option.id === newId);
    if (ind == -1) return;
    newOptions[ind].checked = val;
    itemChangeHandler("options", newOptions, formItems, setFormItems);
  };

  return (
    <div className="py-3 flex flex-col">
      <label for={id} className={`${isRequired ? "required-field" : ""}`}>
        {heading}
      </label>
      <div className="px-2">
        {options?.map((option) => (
          <div className="flex gap-2">
            <input
              type="checkbox"
              id={option.id}
              value={option.value}
              onChange={({ target: { checked } }) =>
                itemOptionChangeHandler(checked, option.id)
              }
            />
            <label for={option.id}> {option.value}</label>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Preview;

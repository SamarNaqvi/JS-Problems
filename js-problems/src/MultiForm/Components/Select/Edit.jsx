import React, { useContext } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FormItemsContext } from "../../Context/FormItemsContext";
import OptionField from "../Text/Edit";
import Option from "./option";
import { itemChangeHandler } from "../../util";

function Edit({ value, id, isRequired, isCheckbox=false }) {
  const { formItems, setFormItems } = useContext(FormItemsContext);
  const currIndx = formItems.findIndex((item) => item.id === id);
  const options = formItems[currIndx]?.options ?? [];

  const itemOptionsChangeHandler = (newId, newVal) => {
    let newOptions = [...options];
    const ind = newOptions.findIndex((option) => option.id === newId);
    if(ind == -1) return;
    newOptions[ind].value = newVal;
    itemChangeHandler("options", newOptions, formItems, setFormItems, currIndx);
  };

  const removeOptionHandler = (newId) => {
    let newOptions = options.filter((option) => option.id !== newId);
    itemChangeHandler("options", newOptions, formItems, setFormItems, currIndx);
  };
  
  return (
    <div className="flex flex-col p-3 bg-gray-100 border border-gray-300 border-l-0 border-r-0 border-b-0">
      <div className="flex justify-between mb-2">
        <input
          className="focus:outline-none"
          type="text"
          value={value}
          onChange={({ target: { value } }) =>
            itemChangeHandler("heading", value, formItems, setFormItems, currIndx)
          }
        />
        <div className="flex items-center gap-x-2">
          <input
            id={id}
            type="checkbox"
            checked={isRequired}
            onChange={({ target: { checked } }) =>
              itemChangeHandler("required", checked, formItems, setFormItems, currIndx)
            }
          />
          <label className="mr-10" for={id}>
            Required
          </label>
          <RiDeleteBin6Line
            className="fill-red-600"
            onClick={() => {
              let items = [...formItems];
              items.splice(currIndx, 1);
              setFormItems(items);
            }}
          />
        </div>
      </div>
      <select
        className="px-4 py-2 bg-gray-50 border-gray-100 focus:border-gray-100 focus:outline-none"
        value={`Select Value`}
        disabled
      />
      <div className="p-2 my-2">
        <p className="mb-2">Options:</p>
        {options.map((option) => (
          <Option isCheckbox={isCheckbox} id={option?.id} value={option?.value} itemOptionsChangeHandler={itemOptionsChangeHandler} removeOptionHandler={removeOptionHandler} />
        ))}
      </div>
      <button
        className="w-24"
        style={{ padding: "5px" }}
        onClick={() => {
          let newOptions = [...options];
          newOptions.push({
            id: options.length + 1,
            value: "Enter new option",
          });
          itemChangeHandler("options", newOptions,formItems, setFormItems, currIndx);
        }}
      >
        Add Option
      </button>
    </div>
  );
}

export default Edit;

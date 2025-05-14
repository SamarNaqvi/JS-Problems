import React, { useContext } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FormItemsContext } from "../../Context/FormItemsContext";

function Edit({ value="New Field", id, isRequired }) {
  const { formItems, setFormItems } = useContext(FormItemsContext);
  const currIndx = formItems.findIndex((item) => item.id === id);

  const itemChangeHandler = (key, val) =>{
    let items = [...formItems];
    items[currIndx][key] = val;
    setFormItems(items);
  }
  return (
    <div className="flex flex-col p-3 bg-gray-100 border border-gray-300 border-l-0 border-r-0 border-b-0">
      <div className="flex justify-between mb-2">
        <input
          className="focus:outline-none"
          type="text"
          value={value}
          onChange={({ target: { value } }) =>
       
            itemChangeHandler("heading",value)
           
          }
        />
        <div className="flex items-center gap-x-2">
          <input
            id={id}
            type="checkbox"
            checked={isRequired}
            onChange={({ target: { checked } }) =>
              itemChangeHandler("required",checked)
            }
          />
          <label className="mr-10" for={id}>
            Required
          </label>
          <RiDeleteBin6Line className="fill-red-600" onClick={()=>{
            let items = [...formItems];
            items.splice(currIndx, 1);
            setFormItems(items);
          }} />
        </div>
      </div>
      <textarea
        className="p-4 bg-gray-50 border-gray-100 focus:border-gray-100 focus:outline-none"
        rows={3}
        value={`Enter ${value}`}
      />
    </div>
  );
}

export default Edit;

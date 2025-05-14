import React, { useContext } from "react";
import { FormItemsContext } from "../../Context/FormItemsContext";

function Preview({ heading, isRequired, placeholder, id }) {
  const { formItems, setFormItems } = useContext(FormItemsContext);
  const currIndx = formItems.findIndex((item) => item.id === id);
  return (
    <div className="flex flex-col py-2">
      <label className={`${isRequired ? "required-field" : ""}`} for={id}>
        {heading}
      </label>
      <input
        className="focus:outline-none p-2 border rounded border-gray-400"
        id={id}
        required={true}
        value={placeholder}
        onChange={({ target: { value } }) => {
          let items = [...formItems];
          items[currIndx].value = value;
          setFormItems(items);
        }}
      />
    </div>
  );
}

export default Preview;

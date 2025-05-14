import React, { useContext, useState } from "react";
import { FaWpforms } from "react-icons/fa6";
import { FormHeader, FormItem,Paragraph,Text, Select } from "./Components";
import { FormItemsContext } from "./Context/FormItemsContext";
import { FiSave } from "react-icons/fi";
import { MdOutlineTextFields } from "react-icons/md";
import { MdFormatListNumbered } from "react-icons/md";
import { IoCheckboxOutline } from "react-icons/io5";
import Checkbox from "./Components/Checkbox";

export const items = [
    { icon: <MdOutlineTextFields />, text: "Text" },
    { icon: <FiSave />, text: "Paragraph" },
    { icon: <MdFormatListNumbered />, text: "Select" },
    { icon: <IoCheckboxOutline />, text: "Checkbox" },
  ];

function MultiForm() {
  const [header, setHeader] = useState("Enter Form Heading");
  const [isPreview, setIsPreview] = useState(false);
  const { formItems, setFormItems } = useContext(FormItemsContext);

  const addItemHandler = ({ itemType, heading }) => {
    const size = formItems.length;

    setFormItems((prev) => [...prev, { id: size + 1, type: itemType, heading, value:"" }]);
  };

  const submitHandler = () =>{
    const res = [];
    formItems.forEach(item=>{
      console.log("item", item);
      if(item.type === "Text" || item.type === "Paragraph")
      {
        res.push({id:item.id, value:item.value});
      }
      else if(item.type === "Checkbox")
      {
        console.log("item.options", item.options);
        res.push({id:item.id, value:item.options.filter(option=>option.checked).map(item=>item.value)})
      }
      else{
        res.push({id:item.id, value: item.options.filter(option=>option.selected).map(item=>item.value)})
      }
    });
    console.log("res", res);
  }

  return (
    <>
      <div className="p-4 px-20 bg-gray-200 flex justify-between w-full">
        <div className="flex gap-2 items-center">
          <FaWpforms className="fill-purple-500" size={20} />{" "}
          <h2 className="bold">Form Builder</h2>
        </div>
        <div className="flex gap-6">
          <button className="flex items-center gap-2">
            <FiSave /> Save
          </button>
          <button onClick={() => setIsPreview(!isPreview)}>{`${isPreview ? "Edit" : "Preview"} Form`}</button>
        </div>
      </div>
      <div className="flex gap-8 w-full h-full p-14 bg-gray-50">
        <div className="w-1/5 border border-gray-200 rounded py-4 px-3 bg-white h-fit">
          <div className="mb-3">Add Form Elements</div>
          <div className="flex flex-wrap gap-2 justify-center">
            {items.map((item) => (
              <FormItem
                addItemHandler={addItemHandler}
                icon={item?.icon}
                text={item?.text}
              />
            ))}
          </div>
        </div>
        <div className="w-4/5 border border-gray-200 rounded">
          <FormHeader header={header} setHeader={setHeader} />
          <div className="h-[28rem] overflow-scroll p-3">
          {formItems.map((item) => (
            <>
              {item.type === "Text" && (
                <Text
                  id={item.id}
                  isPreview={isPreview}
                  heading={item?.heading}
                  value={item?.value}
                  isRequired={item.required}
                />
              )}
              {item.type === "Paragraph" && (
                <Paragraph
                  id={item.id}
                  isPreview={isPreview}
                  heading={item?.heading}
                  value={item?.value}
                  isRequired={item.required}
                />
              )}
              {item.type === "Select" && (
                <Select
                  id={item.id}
                  isPreview={isPreview}
                  heading={item?.heading}
                  isRequired={item.required}
                />
              )}
              {item.type === "Checkbox" && (
                <Checkbox
                  id={item.id}
                  isPreview={isPreview}
                  heading={item?.heading}
                  isRequired={item.required}
                />
              )}
            </>
          ))
          }
         {isPreview && formItems?.length > 0  && ( <button className="mt-2 w-full !bg-purple-500 text-white !rounded !p-2" onClick={submitHandler}>Submit</button>)}
          </div>
        </div>
      </div>
    </>
  );
}

export default MultiForm;

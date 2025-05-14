export const getHeadingText = (type) =>{
switch(type)
{
    case "Text":
        return "New Form Field";
    case "Paragraph":
        return "New Paragraph Field";
    case "Select":
        return "New Select Field";
    default:
        return "New Checkbox Field";
}
}

export const itemChangeHandler = (key, val,formItems,setFormItems, currIndx) => {
    let items = [...formItems];
    items[currIndx][key] = val;
    setFormItems(items);
  };




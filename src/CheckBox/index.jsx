import React from "react";
import { setChildLogic, setParentLogic } from "./util";

export const Checkbox = ({ parent = "", label, checked = false }) => {
  const updatedId = parent ? `${parent}_${label}` : label;

  const handleChange = (e) => {
    const newCheckedState = e.target.checked;

    // Apply the hierarchy logic
    setChildLogic(updatedId, newCheckedState);
    setParentLogic(updatedId);
  };

  return (
    <div>
      <input
        type="checkbox"
        id={updatedId}
        name={label}
        value={label}
        onChange={handleChange}
      />
      <label htmlFor={updatedId}>{label}</label>
    </div>
  );
};

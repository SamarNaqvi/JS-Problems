import React from "react";
import Edit from "./edit";
import Preview from "./preview";

function Paragraph({ isPreview, id, isRequired, value, heading }) {
  return (
    <>
      {!isPreview ? (
        <Edit id={id} isRequired={isRequired} value={heading} />
      ) : (
        <Preview
          heading={heading}
          isRequired={isRequired}
          placeholder={value}
          id={id}
        />
      )}
    </>
  );
}

export default Paragraph;

import React from "react";
import Edit from "./Edit";
import Preview from "./Preview";

function Text({ isPreview, id, isRequired, value, heading }) {
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

export default Text;

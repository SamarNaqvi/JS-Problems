import React from 'react'
import Edit from '../Select/Edit';
import Preview from './Preview';

function Checkbox({isPreview, heading, id, isRequired }) {
    return (
        <>
          {!isPreview ? (
            <Edit id={id} value={heading} isRequired={isRequired} isCheckbox />
          ) : (
            <Preview
              heading={heading}
              id={id}
              isRequired={isRequired}
            />
          )}
        </>
      );
}

export default Checkbox
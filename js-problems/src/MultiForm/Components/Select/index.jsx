import React from 'react'
import Edit from './Edit';
import Preview from './Preview';

function Select({isPreview, heading, id, isRequired }) {
    return (
        <>
          {!isPreview ? (
            <Edit id={id} value={heading} isRequired={isRequired} />
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

export default Select
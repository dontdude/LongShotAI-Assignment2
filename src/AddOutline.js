import React, { useState } from 'react';

function AddOutline({outlines, setOutlines}) {
  const [showInput, setShowInput] = useState(false);

  const handleAddClick = () => {
    setShowInput(true);
  };

  const handleSaveClick = () => {
    // Save the outline text to state
    setOutlines([...outlines, document.getElementById('outline-input').value]);
    setShowInput(false);
  };

  return (
    <>
      {showInput ? (
        <>
          <input
            id="outline-input"
            className="text-purple-600 border border-purple-600 rounded-lg text-lg p-2 mt-4"
            type="text"
            placeholder="Enter outline text"
          />
          <button
            className="text-purple-600 border border-purple-600 rounded-lg text-lg py-2 mt-4"
            onClick={handleSaveClick}
          >
            Save
          </button>
        </>
      ) : (
        <button
          className="text-purple-600 border border-purple-600 rounded-lg text-lg py-2 mt-4"
          onClick={handleAddClick}
        >
          + Add Outline
        </button>
      )}
    </>
  );
}

export default AddOutline;

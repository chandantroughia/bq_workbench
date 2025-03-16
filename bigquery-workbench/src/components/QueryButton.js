// src/components/QueryButton.jsx
import React from 'react';

const QueryButton = ({ onClick }) => {
  return (
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2"
      onClick={onClick}
    >
      Run Query
    </button>
  );
};

export default QueryButton;
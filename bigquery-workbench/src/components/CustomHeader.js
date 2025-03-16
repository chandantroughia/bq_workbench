// src/components/CustomHeader.jsx
import React from 'react';

const CustomHeader = (props) => {
  // When the header is double-clicked, auto-size the column.
  const onHeaderDoubleClick = () => {
    // Using the grid API provided in props, auto-size this column.
    // Note: autoSizeColumn expects an array of column IDs.
    props.api.autoSizeColumn(props.column.colId);
  };

  return (
    <div 
      className="ag-header-cell-label cursor-pointer select-none"
      onDoubleClick={onHeaderDoubleClick}
    >
      <span>{props.displayName}</span>
      {/* Optionally, include sort icons or additional controls */}
    </div>
  );
};

export default CustomHeader;
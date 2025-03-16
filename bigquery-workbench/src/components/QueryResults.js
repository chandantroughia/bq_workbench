// src/components/QueryResults.js
import React, { useState, useEffect, useRef } from 'react';
import { AgGridReact } from 'ag-grid-react';
import { 
  ClientSideRowModelModule,
  NumberEditorModule,
  NumberFilterModule,
  TextFilterModule,
  TextEditorModule,
  ValidationModule 
} from 'ag-grid-community';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

const QueryResults = ({ rowData }) => {
  const [columnDefs, setColumnDefs] = useState([]);
  const gridRef = useRef(null);

  useEffect(() => {
    // If rowData is available and non-empty, derive column definitions dynamically
    if (rowData && rowData.length > 0) {
      const keys = Object.keys(rowData[0]);
      const newColDefs = keys.map((key) => ({
        headerName: key.toUpperCase(),  // Display header text in uppercase (adjust as desired)
        field: key,
        width: 150,           // Set a fixed initial width (adjust as needed)
        resizable: true,      // Allow users to manually resize the column
        sortable: true,       // Enable sorting
        filter: true          // Enable filtering
      }));
      setColumnDefs(newColDefs);
    }
  }, [rowData]);

  return (
    <div className="ag-theme-alpine" style={{ height: 400, width: '100%' }}>
      <AgGridReact
        ref={gridRef}
        modules={[ClientSideRowModelModule,
          TextFilterModule,
          TextEditorModule,
          NumberFilterModule,
          NumberEditorModule,
          ValidationModule
        ]}
        rowData={rowData}
        columnDefs={columnDefs}
        defaultColDef={{
          resizable: true,
          width: 150,
          sortable: true,
          filter: true,
        }}
        pagination={true}
        paginationPageSize={20}

      />
    </div>
  );
};

export default QueryResults;
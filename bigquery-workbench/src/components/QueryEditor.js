// src/components/QueryEditor.jsx
import React from 'react';

const QueryEditor = ({ query, setQuery }) => {
  return (
    <div className="mb-4">
      <label className="block text-gray-700 font-bold mb-2" htmlFor="query">
        SQL Query:
      </label>
      <textarea
        id="query"
        className="w-full h-40 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Write your SQL query here..."
      />
    </div>
  );
};

export default QueryEditor;
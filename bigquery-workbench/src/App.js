// App.jsx
import React, { useState } from 'react';
import axios from 'axios';
import QueryEditor from './components/QueryEditor';
import QueryButton from './components/QueryButton';
import QueryResults from './components/QueryResults';

const App = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [error, setError] = useState('');

  const runQuery = async () => {
    if (!query.trim()) {
      setError("Query cannot be empty");
      return;
    }
  
    console.log("Run Query button clicked, sending payload to API");
    try {
      const response = await axios.post("http://localhost:8000/run-query", { query });
      setResults(response.data.data);
      setError('');
    } catch (error) {
      console.error("Error executing query:", error);
      setError("Error executing query, please check the console for details.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-500 text-white p-4">
        <h1 className="text-4xl font-bold text-center">
          BigQuery Workbench
        </h1>
      </header>
      <main className="w-full bg-white p-6">
        <QueryEditor query={query} setQuery={setQuery} />
        <QueryButton onClick={runQuery} />
        {error && (
          <div className="mt-4 p-2 bg-red-100 text-red-600 rounded">
            {error}
          </div>
        )}
        <div className="mt-6">
          <QueryResults rowData={results} />
        </div>
      </main>
    </div>
  );
};

export default App;
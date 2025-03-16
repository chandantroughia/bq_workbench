import { runQuery } from "./api";

const executeQuery = async () => {
  if (!query.trim()) {
    setError("Query cannot be empty");
    return;
  }

  setLoading(true);
  setError("");
  setResults([]);

  try {
    const queryResults = await runQuery(query);
    setResults(queryResults);
  } catch (err) {
    setError("Failed to execute query. Check console for details.");
    console.error("Error executing query:", err);
  } finally {
    setLoading(false);
  }
};
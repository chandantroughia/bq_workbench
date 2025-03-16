# 📌 Project Outline: BigQuery Workbench

## 1️⃣ Backend (FastAPI)
**📁 bigquery-backend/**

- `main.py` → The entry point for the FastAPI app.
- `bigquery_service.py` → Handles BigQuery queries.
- `config.py` → Stores environment variables (e.g., BigQuery credentials).
- `requirements.txt` → Dependencies for FastAPI, BigQuery, etc.

### API Endpoints:
- **POST** `/run-query` → Runs a SQL query in BigQuery and returns results.
- **POST** `/save-query` → (Optional) Save queries for future use.
- **GET** `/fetch-queries` → Fetch saved queries.

## 2️⃣ Frontend (React + Tailwind)
**📁 bigquery-frontend/**

- **📁 src/components/**
    - `QueryEditor.js` → SQL input field for users to enter queries.
    - `ResultsTable.js` → Displays query results in a table/grid.
    - `Sidebar.js` → Navigation between saved queries, editor, and settings.
- **📁 src/pages/**
    - `Home.js` → The main page (SQL workbench UI).
    - `SavedQueries.js` → Displays saved queries.
    - `App.js` → Main component that connects everything.
- `api.js` → Handles requests to the FastAPI backend.
- `tailwind.config.js` → TailwindCSS configuration.

## 3️⃣ Development Plan
📌 We'll implement one file at a time:

- ✅ Set up the backend (`main.py`)
- 🔜 BigQuery service (`bigquery_service.py`)
- 🔜 Frontend (React) - Start with `QueryEditor.js`
- 🔜 `ResultsTable.js`
- 🔜 Frontend API (`api.js`)
- 🔜 Styling & Final Touches

bigquery-frontend/
├── public/
├── src/
│   ├── components/
│   │   ├── QueryEditor.js  <!-- Textbox for writing SQL queries -->
│   │   ├── QueryResults.js  <!-- Grid/Table to display results -->
│   │   ├── QueryButton.js  <!-- Button to execute query -->
│   │   ├── Header.js  <!-- App header -->
│   ├── App.js  <!-- Main application logic -->
│   ├── index.js  <!-- Entry point -->
├── package.json  <!-- Dependencies -->
├── .env  <!-- Backend API URL -->
├── README.md  <!-- Documentation -->
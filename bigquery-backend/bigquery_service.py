# bigquery_service.py
from google.cloud import bigquery
import os
from dotenv import load_dotenv

# Load environment variables from .env file (optional, for security)
load_dotenv()

# Set path to Google Cloud Service Account JSON file
SERVICE_ACCOUNT_FILE = os.getenv("GOOGLE_APPLICATION_CREDENTIALS", "service_account.json")

# Initialize BigQuery client
client = bigquery.Client.from_service_account_json(SERVICE_ACCOUNT_FILE)

def run_bigquery_query(query: str):
    """
    Executes a SQL query in Google BigQuery.

    Args:
        query (str): The SQL query to run.

    Returns:
        list: Query results as a list of dictionaries.
    """
    try:
        query_job = client.query(query)  # Run the query
        results = query_job.result()  # Wait for results

        # Convert results to a list of dictionaries
        data = [dict(row) for row in results]

        return data  # Return the query results
    except Exception as e:
        raise Exception(f"BigQuery Error: {str(e)}")
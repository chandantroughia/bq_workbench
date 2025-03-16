import React from "react";

/**
 * Header Component - Displays the application title.
 */
const Header = () => {
  return (
    <header style={styles.header}>
      <h1 style={styles.title}>BigQuery Workbench</h1>
    </header>
  );
};

// Inline styles for header
const styles = {
  header: {
    backgroundColor: "#282c34",
    padding: "15px",
    color: "white",
    textAlign: "center",
    fontSize: "24px",
    fontWeight: "bold",
  },
  title: {
    margin: 0,
  },
};

export default Header;
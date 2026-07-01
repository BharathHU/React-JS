import React, { useState } from 'react';

function Dark() {

    const [darkMode, setDarkMode] = useState(false);

    const toggleTheme = () => setDarkMode(!darkMode);

    const themeStyle = {
        backgroundColor: darkMode ? "black" : "white",
        color: darkMode ? "white" : "black",
        minHeight: "100vh",
        padding: "20px",
        transition: "all 0.3s ease-in-out",
    };

    const cardStyle = {
        backgroundColor: darkMode ? "#1e1e1e" : "#f5f5f5",
        color: darkMode ? "white" : "black",
        padding: "20px",
        maxWidth: "350px",
        margin: "50px auto",
        borderRadius: "10px",
        boxShadow: "0 0 10px gray",
        textAlign: "center",
    };

    return (
        <div>
            <div style={cardStyle}>
                <h1>Dark Mode Example</h1>

                <p>
                    Welcome to React Class
                </p>

                <button onClick={toggleTheme}>
                    {darkMode ? "Light Mode" : "Dark Mode"}
                </button>
            </div>
        </div>
    );
}

export default Dark;
import React, { useEffect, useState } from "react";
import "./LoadedComponent.css";

function LoadedComponent() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const item = [];

    for (let i = 0; i < 10000; i++) {
      item.push("Hello, How are you? Welcome to React JS Class.");
    }

    setData(item);
  }, []);

  return (
    <div className="container">
      <h1>Loaded Component With More Data</h1>

      <div className="list">
        {data.map((ele, index) => (
          <div className="card" key={index}>
            <span>{index + 1}.</span>
            <p>{ele}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LoadedComponent;
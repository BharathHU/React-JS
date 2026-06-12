import React, { useState } from 'react';

function Example1() {
  const [text, setText] = useState("");
  const [password, setPassword] = useState("");

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter Text"
        onChange={handleTextChange}
      />
      <p>Entered Text is: {text}</p>

      <input
        type="password"
        placeholder="Enter Password"
        onChange={handlePasswordChange}
      />
      <p>Entered Password is: {password}</p>
    </div>
  );
}

export default Example1;
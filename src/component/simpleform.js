import React, { useState } from "react";

function SimpleForm() {
  const [inputValue, setInputValue] = useState("");
  const [submittedData, setSubmittedData] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmittedData(inputValue);
    setInputValue("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
          placeholder="Enter some text"
        />
        <button type="submit">Submit</button>
      </form>
      {submittedData && <p>Submitted data: {submittedData}</p>}
    </div>
  );
}
export default SimpleForm;
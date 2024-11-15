import { useState } from "react";
function FormComponent() {
  const [inputValue, setInputValue] = useState("");
    const [selectedValue, setSelectedValue] = useState("");
    const [formData, setFormData] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Submitted: ${formData}`);
    };
  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <p>inputvalue{inputValue}</p>

      <label> select from the dropdown below</label>
      <select
        value={selectedValue}
        onchange={(e) => setSelectedValue(e.target.value)}
      >
        <option value="Akinsola">Akinsola </option>
        <option value="Rita">Rita </option>
        <option value="jazzy">jazzy </option>
      </select>
          <p> selectedValue {selectedValue}</p>
          
          <input type="text" value={formData} onChange={(e) => setFormData(e.target.value)} />
          <button type="button" onclick={handleSubmit}>submit</button>
    </div>
  );
}
export default FormComponent;


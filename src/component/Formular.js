import React, { useState } from "react";

const FormComponent = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    gender: "",
    hobbies: [],
    country: "",
    comments: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFormData((prevData) => {
        const hobbies = prevData.hobbies.includes(value)
          ? prevData.hobbies.filter((hobby) => hobby !== value)
          : [...prevData.hobbies, value];
        return { ...prevData, hobbies };
      });
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-6 max-w-md mx-auto bg-white rounded-lg shadow-md"
    >
      <h2 className="text-xl font-bold mb-4">Sample Form</h2>

      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700">
          Name:
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 border rounded"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700">
          Email:
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 border rounded"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">Gender:</label>
        <label className="inline-flex items-center mr-4">
          <input
            type="radio"
            name="gender"
            value="male"
            checked={formData.gender === "male"}
            onChange={handleChange}
            className="mr-1"
          />
          Male
        </label>
        <label className="inline-flex items-center">
          <input
            type="radio"
            name="gender"
            value="female"
            checked={formData.gender === "female"}
            onChange={handleChange}
            className="mr-1"
          />
          Female
        </label>
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">Hobbies:</label>
        <label className="inline-flex items-center mr-4">
          <input
            type="checkbox"
            name="hobbies"
            value="reading"
            checked={formData.hobbies.includes("reading")}
            onChange={handleChange}
            className="mr-1"
          />
          Reading
        </label>
        <label className="inline-flex items-center mr-4">
          <input
            type="checkbox"
            name="hobbies"
            value="traveling"
            checked={formData.hobbies.includes("traveling")}
            onChange={handleChange}
            className="mr-1"
          />
          Traveling
        </label>
        <label className="inline-flex items-center">
          <input
            type="checkbox"
            name="hobbies"
            value="gaming"
            checked={formData.hobbies.includes("gaming")}
            onChange={handleChange}
            className="mr-1"
          />
          Gaming
        </label>
      </div>

      <div className="mb-4">
        <label htmlFor="country" className="block text-gray-700">
          Country:
        </label>
        <select
          id="country"
          name="country"
          value={formData.country}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 border rounded"
        >
          <option value="">Select Country</option>
          <option value="usa">USA</option>
          <option value="canada">Canada</option>
          <option value="nigeria">Nigeria</option>
          <option value="uk">UK</option>
        </select>
      </div>

      <div className="mb-4">
        <label htmlFor="comments" className="block text-gray-700">
          Additional Comments:
        </label>
        <textarea
          id="comments"
          name="comments"
          value={formData.comments}
          onChange={handleChange}
          rows="4"
          className="w-full px-3 py-2 border rounded"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 rounded"
      >
        Submit
      </button>
    </form>
  );
};

export default FormComponent;

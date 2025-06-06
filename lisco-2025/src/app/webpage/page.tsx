"use client";

import React, { useState } from "react";

const FormPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // You can do form validation or send data here
    setSubmitted(true);
  };

  return (
    <div style={{ maxWidth: 400, margin: "2rem auto", fontFamily: "Arial, sans-serif" }}>
      <h2>Basic React Form</h2>

      {submitted ? (
        <div style={{ color: "green" }}>
          <p>Thank you, <strong>{formData.name}</strong>! Your form was submitted.</p>
          <button onClick={() => setSubmitted(false)}>Fill Again</button>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              style={{ width: "100%", padding: "8px", marginTop: "4px", marginBottom: "12px" }}
            />
          </label>

          <label>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              style={{ width: "100%", padding: "8px", marginTop: "4px", marginBottom: "12px" }}
            />
          </label>

          <button
            type="submit"
            style={{
              padding: "10px 20px",
              backgroundColor: "#007bff",
              color: "white",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            Submit
          </button>
        </form>
      )}
    </div>
  );
};

export default FormPage;

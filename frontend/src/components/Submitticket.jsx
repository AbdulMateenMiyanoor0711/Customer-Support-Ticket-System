import { useState } from "react";

const Submitticket = () => {
  const [formData, setFormData] = useState({
    customername: "",
    email: "",
    category: "", 
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.customername ||
      !formData.email ||
      !formData.category || 
      !formData.description
    ) {
      alert("Please fill all fields");
      return;
    }

    await addTicket(formData);

    setFormData({
      customername: "",
      email: "",
      category: "", 
      description: "",
    });
  };

  const addTicket = async (ticketData) => {
    try {
      const response = await fetch("http://localhost:5000/add-ticket", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(ticketData),
      });

      if (!response.ok) {
        throw new Error("Failed to submit ticket");
      }

      const data = await response.json();

      alert("Ticket submitted successfully!");
      console.log(data);
    } catch (error) {
      console.error(error);
      alert("Error submitting ticket");
    }
  };

  return (
    <>
      <div>
        <h1>Submit your Ticket here</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="customername">Name</label>
          <input
            type="text"
            id="customername"
            name="customername"
            placeholder="Enter your name"
            value={formData.customername}
            onChange={handleChange}
          />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
          />
          <label htmlFor="category">Issue Type</label>
          <select
            id="category"
            name="category" 
            value={formData.category} 
            onChange={handleChange}
          >
            <option value="" disabled>Select an issue...</option> 
            <option value="Payment">Payment Issue</option>
            <option value="Technical">Technical Issue</option>
            <option value="General">General Issue</option>
          </select>
          <textarea
            id="description"
            name="description"
            placeholder="Describe your issue"
            value={formData.description}
            onChange={handleChange}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};

export default Submitticket;

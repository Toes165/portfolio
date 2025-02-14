"use client";
import { useState } from "react";
import { database } from "../firebaseConfig";
import { ref, push } from "firebase/database";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await push(ref(database, "contacts"), formData);
      alert("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
      <br />
      <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
      <br />
      <textarea name="message" placeholder="Message" value={formData.message} onChange={handleChange} className="Message" required></textarea>
      <br />
      <input type="submit" value="Submit" />
    </form>
  );
}

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { addContact, contactSelector } from "../Redux/contactReducer";

const styles = {
  container: {
    padding: "20px",
    margin: "0 auto", // Center the container
    maxWidth: "600px", // Set a maximum width
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  label: {
    margin: "10px 0",
  },
  input: {
    padding: "10px",
    margin: "5px 0",
  },
  button: {
    padding: "10px",
    backgroundColor: "#007bff",
    color: "white",
    cursor: "pointer",
  },
};

const ContactAdd = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { contactList } = useSelector(contactSelector);
  const [contact, setContact] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleChange = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newContact = {
      id: contactList[contactList.length - 1].id + 1,
      ...contact,
    };
    // dispatch({ type: "ADD_CONTACT", payload: newContact });
    dispatch(() => addContact(newContact));
    toast.success("Contact added successfully");
    navigate("/");
  };

  return (
    <div style={styles.container}>
      <h2>Add Contact</h2>
      <form style={styles.form} onSubmit={handleSubmit}>
        <label style={styles.label}>Name:</label>
        <input
          type="text"
          name="name"
          value={contact.name}
          onChange={handleChange}
          style={styles.input}
        />

        <label style={styles.label}>Email:</label>
        <input
          type="email"
          name="email"
          value={contact.email}
          onChange={handleChange}
          style={styles.input}
        />

        <label style={styles.label}>Phone Number:</label>
        <input
          type="text"
          name="phone"
          value={contact.phone}
          onChange={handleChange}
          style={styles.input}
        />

        <button type="submit" style={styles.button}>
          Add Contact
        </button>
      </form>
    </div>
  );
};

export default ContactAdd;

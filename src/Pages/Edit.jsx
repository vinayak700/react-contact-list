import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { contactSelector, updateContact } from "../Redux/contactReducer";

const styles = {
  container: {
    padding: "20px",
    margin: "0 auto",
    maxWidth: "600px",
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

const ContactEdit = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const { contactList } = useSelector(contactSelector);
  const [contact, setContact] = useState({
    name: "",
    email: "",
    phone: "",
  });

  useEffect(() => {
    // Fetch the contact with the given ID and populate the state
    const selectedContact = contactList.find((c) => c.id === parseInt(id));
    if (selectedContact) {
      setContact(selectedContact);
    }
  }, [id, contactList]);

  const handleChange = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedContact = { ...contact };
    // dispatch({ type: "UPDATE_CONTACT", payload: updatedContact });
    dispatch(updateContact(updatedContact));
    toast.success("Contact updated successfully");
    navigate("/");
  };

  return (
    <div style={styles.container}>
      <h2>Edit Contact</h2>
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
        <div className="">
          <button type="submit" style={styles.button}>
            Update Contact
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactEdit;

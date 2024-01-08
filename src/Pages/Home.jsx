import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  contactSelector,
  deleteContact,
  fetchContacts,
} from "../Redux/contactReducer";

const Home = () => {
  const { contactList } = useSelector(contactSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div style={styles.contactsContainer}>
      <div style={styles.container}>
        <div className="row">
          <div
            style={styles.addButtonContainer}
            className="col-md-12 my-5 text-end"
          >
            <Link to="/add" style={styles.addButton}>
              Add Contact
            </Link>
          </div>
          <div className="col-md-10 mx-auto">
            <table style={styles.table}>
              <thead style={styles.th}>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Number</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {contactList.map((contact, id) => (
                  <tr key={id} style={id % 2 === 0 ? styles.oddRow : null}>
                    <td style={styles.td}>{id + 1}</td>
                    <td style={styles.td}>{contact.name}</td>
                    <td style={styles.td}>{contact.email}</td>
                    <td style={styles.td}>{contact.phone}</td>
                    <td style={{ ...styles.td, ...styles.actionButtons }}>
                      <Link
                        to={`/edit/${contact.id}`}
                        style={styles.editButton}
                      >
                        Edit
                      </Link>
                      <button
                        type="button"
                        onClick={() => {
                          // dispatch({
                          //   type: "DELETE_CONTACT",
                          //   payload: contact.id,
                          // });
                          dispatch(deleteContact({ id: contact.id }));
                          toast.success("Contact deleted successfully.");
                        }}
                        style={styles.deleteButton}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

const styles = {
  contactsContainer: {
    margin: "20px 0",
  },
  container: {
    padding: "20px",
  },
  addButtonContainer: {
    textAlign: "end",
    marginBottom: "20px",
  },
  addButton: {
    padding: "10px 20px",
    backgroundColor: "#343a40",
    color: "white",
    textDecoration: "none",
    borderRadius: "5px",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    marginTop: "20px",
  },
  th: {
    backgroundColor: "#343a40",
    color: "white",
    padding: "12px",
    textAlign: "center",
  },
  td: {
    padding: "12px",
    textAlign: "center",
  },
  oddRow: {
    backgroundColor: "#f8f9fa",
  },
  hoverRow: {
    backgroundColor: "#e2e6ea",
  },
  actionButtons: {
    textAlign: "center",
  },
  editButton: {
    padding: "5px 12px",
    margin: "0px 5px",
    backgroundColor: "#007bff",
    color: "white",
    textDecoration: "none",
    borderRadius: "5px",
  },
  deleteButton: {
    padding: "8px 12px",
    margin: "0 4px",
    backgroundColor: "#dc3545",
    color: "white",
    borderRadius: "5px",
    border: "none",
  },
};

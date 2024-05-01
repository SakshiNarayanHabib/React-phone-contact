import React, { useState, useEffect } from "react";

function ContactList() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetch("/contacts")
      .then((response) => response.json())
      .then((contacts) => {
        setContacts(contacts);
      })
      .catch((error) => console.error("Error fetching contacts:", error));
  }, []);

  const deleteContact = (id) => {
    fetch(`/contacts/${id}`, {
      method: "DELETE"
    })
      .then((response) => response.json())
      .then((data) => {
        setContacts(contacts.filter((contact) => contact.id !== id));
        showMessage(data.message);
      })
      .catch((error) => console.error("Error deleting contact:", error));
  };

  return (
    <div id="contactList">
      <h2>Contact List</h2>
      <ul>
        {contacts.map((contact) => (
          <li key={contact.id}>
            <span>{contact.name} - {contact.phone}</span>
            <button onClick={() => deleteContact(contact.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ContactList;

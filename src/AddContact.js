import React, { useState } from "react";

function AddContact() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const addContact = () => {
    if (!isValidPhone(phone)) {
      showMessage("Phone number must be 10 digits long");
      return;
    }
    fetch("/contacts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name, phone })
    })
      .then((response) => response.json())
      .then((data) => {
        showMessage(data.message);
        setName("");
        setPhone("");
      })
      .catch((error) => console.error("Error adding contact:", error));
  };

  return (
    <div id="editOptions">
      <h2>Add Contacts</h2>
      <div id="addContact">
        <input
          type="text"
          id="name"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="tel"
          id="phone"
          placeholder="Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <button onClick={addContact}>Add Contact</button>
      </div>
    </div>
  );
}

export default AddContact;

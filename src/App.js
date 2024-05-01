import React, { useState, useEffect } from "react";
import "./styles.css";
import ContactList from "./ContactList";
import AddContact from "./AddContact";

function App() {
  const [showContactList, setShowContactList] = useState(true);

  return (
    <div className="container">
      <h1>Contact Management System</h1>
      <div id="options">
        <button onClick={() => setShowContactList(true)}>View Contacts</button>
        <button onClick={() => setShowContactList(false)}>Add Contacts</button>
      </div>
      {showContactList ? <ContactList /> : <AddContact />}
      <div id="message" className="message"></div>
    </div>
  );
}

export default App;

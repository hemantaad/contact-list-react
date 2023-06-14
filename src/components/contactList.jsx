import React, { Component } from "react";
import { getContacts } from "../services/contactCard";
import ContactCard from "./contactCard";

class ContactList extends Component {
  state = {
    contacts: getContacts(),
  };

  // componentDidMount() {
  //   console.log("Component mounted.");
  //   this.setState({ contacts: getContacts() });
  // }

  render() {
    const contacts = [...this.state.contacts];
    console.log(contacts, "contacts array");
    return (
      <div className="container">
        {contacts.map((contact) => (
          <ContactCard contact={contact} />
        ))}
      </div>
    );
  }
}

export default ContactList;

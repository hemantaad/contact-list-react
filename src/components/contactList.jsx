import React, { Component } from "react";
import { getContacts } from "../services/contactCard";
import ContactCard from "./contactCard";
import Pagination from "./common/pagination";
import { paginate } from "../utils/paginate";
class ContactList extends Component {
  state = {
    contacts: [],
    currentPage: 1,
    pageSize: 4,
  };

  componentDidMount() {
    console.log("Component mounted.");
    this.setState({ contacts: getContacts() });
  }

  handlePageChange = (pageNumber) => {
    this.setState({ currentPage: pageNumber });
  };

  render() {
    const { contacts, currentPage, pageSize } = this.state;
    const paginatedContacts = paginate(contacts, currentPage, pageSize);

    return (
      <div className="container">
        {paginatedContacts.map((contact) => (
          <ContactCard contact={contact} key={contact.id} />
        ))}
        <Pagination
          itemCount={contacts.length}
          pageSize={pageSize}
          currentPage={currentPage}
          onPageChange={this.handlePageChange}
        />
      </div>
    );
  }
}

export default ContactList;

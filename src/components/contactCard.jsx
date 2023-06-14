import React, { Component } from "react";

class ContactCard extends Component {
  render() {
    const { contact } = this.props;
    return (
      <div className="card border-primary mb-3">
        <div className="card-body">
          <div className="row">
            <div className="col-md-4 d-flex align-items-center">
              <div>
                <p className="text-small">
                  {contact.firstName} {contact.lastName}
                </p>
                <p>{contact.email}</p>
              </div>
            </div>
            <div className="col-md-8 align-middle">
              <h1 className="fw-bold text-end ">{contact.contact}</h1>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactCard;

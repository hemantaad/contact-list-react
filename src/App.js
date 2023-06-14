import React, { Component } from "react";
import Navbar from "./components/common/navbar";
import AddContact from "./components/addContact";
import ContactList from "./components/contactList";
import "./App.css";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <main className="container">
          <Navbar />
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <AddContact />
              </div>
              <div className="col-md-8">
                <ContactList />
              </div>
            </div>
          </div>
        </main>
      </React.Fragment>
    );
  }
}

export default App;

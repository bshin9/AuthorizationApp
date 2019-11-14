import React from "react";
import axios from "axios";
import EditComment from "./EditComment";

class CommentBox extends React.Component {
  state = {
    contacts: []
  };

  componentDidMount() {
    this.getMongoContacts();
  }

  // We want to map through the contacts using state just like how we did the products
  getMongoContacts = () => {
    const url = "/contacts";
    axios
      .get(url)
      .then(res => {
        console.log(res.data);
        this.setState({ contacts: res.data });
      })
      .catch(err => {
        console.log("failed--", err);
      });
  };
  render() {
    return (
      <div className="contactWrapper">
        <div className="getContact">
          {this.state.contacts &&
            this.state.contacts.map(contacts => (
              <EditComment
                contact_id={contacts.contact_id}
                user_name={contacts.user_name}
                message={contacts.message}
              />
            ))}
        </div>
      </div>
    );
  }
}

export default CommentBox;

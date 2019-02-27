import React, { Component } from "react";
import AuthorCard from "./AuthorCard";
class AuthorList extends Component {
  render() {
    const authorCard = this.props.authors.map(author => (
      <AuthorCard key={author.first_name + author.last_name} author={author} />
    ));
    return (
      <div>
        <h3>Authors</h3>
        <div className="row">{authorCard}</div>
      </div>
    );
  }
}

export default AuthorList;

import React from "react";

// Components
import AuthorCard from "./AuthorCard";
import AuthorDetail from "./components/AuthorDetail";


const AuthorList = props => {
  const authorCards = props.authors.map(author => (
    <AuthorCard key={author.first_name + author.last_name} author={author} />
  ));

  return (
    <div className="authors">
      <h3>Authors</h3>
      <div className="row">{authorCards}</div>
      <AuthorDetail author={author} />
    </div>
  );
};

export default AuthorList;

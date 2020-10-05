import React from "react";

// Components
import AuthorCard from "./AuthorCard"; 
import SearchBar from "./components/SearchBar"; 


const AuthorList = props => {
  const authorCards = props.authors.map(author => (
    <AuthorCard key={author.first_name + author.last_name} author={author} select={props.select}/>
  ));

  return (
    <div className="authors">
      <SearchBar />
      <h3>Authors</h3>
      <div className="row">{authorCards}</div>
    </div>
  );
};

export default AuthorList;

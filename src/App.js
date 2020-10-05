import React, { useState } from "react";

// Data
import authors from "./data";

// Components
import Sidebar from "./Sidebar";
import AuthorList from "./AuthorList";
import AuthorDetail from "./components/AuthorDetail";


function App() {
  const filterAuthors = query => { 
    let filteredauthors = [];
    filteredauthors = authors.filter((author) => author.includes(query.ToLowerCase()));
   }
  const [currentAuthor, setAuthor] = useState(null);
  const selectAuthor = author => {
    setAuthor(author);
  }
  return (
    <div id="app" className="container-fluid">
      <div className="row">
        <div className="col-2">
          <Sidebar />
        </div>
        <div className="content col-10">
          {selectAuthor ? 
          <AuthorDetail author={currentAuthor} /> : 
          <AuthorList authors={authors} select={selectAuthor}/>
          }
        </div>
      </div>
    </div>
  );
}

export default App;

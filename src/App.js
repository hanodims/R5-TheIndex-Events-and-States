import React, { useState } from "react";

// Data
import data from "./data";

// Components
import Sidebar from "./Sidebar";
import AuthorList from "./AuthorList";
import AuthorDetail from "./components/AuthorDetail";


function App() {
  const [authors, setAuthors] = useState(data);
  const filterAuthors = query => { 
    let filteredauthors = data.filter(author => `${author.first_name} ${author.last_name}`.toLowerCase().includes(query.toLowerCase()))
    setAuthors(filteredauthors)
   }
  const [currentAuthor, setAuthor] = useState(null);
  const selectAuthor = author => {
    setAuthor(author);
  };
  return (
    <div id="app" className="container-fluid">
      <div className="row">
        <div className="col-2">
          <Sidebar selectAuthor={selectAuthor}/>
        </div>
        <div className="content col-10">
          {currentAuthor ? 
          (<AuthorDetail author={currentAuthor} />)
          : 
          (<AuthorList authors={authors} selectAuthor={selectAuthor} filterAuthors = {filterAuthors}/>)
          }
        </div>
      </div>
    </div>
  );
}

export default App;

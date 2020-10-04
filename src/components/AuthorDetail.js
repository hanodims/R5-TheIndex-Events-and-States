import React from "react";


const AuthorDetail = props => {
    const author = props.author;
    const authorBooks = author.books.map(book => (
    <authorBooks key={book.title} book={book} />
  ));
    return (

<div className="author col-xs-10">
    <div>
        <h3>author.key</h3>
        <img src="http://catchingfire.ca/wp-content/uploads/2016/09/question-mark-square-01.png" className="img-thumbnail" alt=""/>
    </div>
    <table className='mt-3 table'>
        <thead>
            <tr>
                <th>Name</th>
                <th>Authors</th>
                <th>Color</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>authorBooks.key</td>
                <td>I SHOULD BE A STRING OF THIS BOOK'S AUTHORS</td>
                <td>
                    <button className="btn" style={{backgroundColor: "blue"}}/>
                </td>
            </tr>
            <tr>
                <td>I SHOULD BE ANOTHER BOOK NAME</td>
                <td>I SHOULD BE A STRING OF THIS OTHER BOOK'S AUTHORS</td>
                <td>
                    <button className="btn" style={{backgroundColor: "red"}}/>
                </td>
            </tr>
        </tbody>
        </table>
</div>
    ) };

export default AuthorDetail;
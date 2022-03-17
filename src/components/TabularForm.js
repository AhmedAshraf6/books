import React, { useState } from 'react';
const TabularForm = ({
  book,
  putDetails,
  setClickedSingleBook,
  setDisplaySingleBook,
}) => {
  // https://covers.openlibrary.org/b/ID/10872750-M.jpg
  const { title, author_name, first_publish_year } = book;
  const HandleSingle = () => {
    setClickedSingleBook(true);
    setDisplaySingleBook(book);
  };
  return (
    <tr>
      <td>{title}</td>
      <td>{author_name && author_name[0]}</td>
      <td>{first_publish_year && first_publish_year}</td>
      <td>
        <div className='special-td'>
          <button onClick={() => putDetails(book)}>about</button>
          <button onClick={HandleSingle}>book</button>
        </div>
      </td>
    </tr>
  );
};

export default TabularForm;

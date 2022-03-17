import React, { useState } from 'react';
import SingleBook from '../pages/SingleBook';
import TabularForm from './TabularForm';
const Search = ({ putDetails }) => {
  // Varible State
  const [searchedName, setSearchedName] = useState('');
  const [selectedOption, setSelectedOption] = useState('title');
  const [books, setBooks] = useState('');
  const [clickedSingleBoook, setClickedSingleBook] = useState(false);
  const [displaySingleBook, setDisplaySingleBook] = useState({});

  // HandleSubmit function
  const HandleSubmit = (e) => {
    e.preventDefault();
    const joinedSearchedName = searchedName.split(' ').join('+');
    const fetchBooks = async () => {
      try {
        const respond = await fetch(
          `http://openlibrary.org/search.json?${selectedOption}=${joinedSearchedName}`
        );
        const result = await respond.json();
        if (!respond.ok) {
          const msg = respond.status;
          throw new Error(msg);
        }
        setBooks(result.docs);
      } catch (error) {
        console.log(error);
      }
    };
    fetchBooks();
  };

  return (
    <>
      <form className='search'>
        <input
          type='text'
          className='searchMovie'
          placeholder='search for a book'
          value={searchedName}
          onChange={(e) => setSearchedName(e.target.value)}
        />
        <div className='select-dropdown'>
          <select
            id='big'
            name='big'
            value={selectedOption}
            onChange={(e) => {
              const s = e.target.value;
              setSelectedOption(s);
            }}
          >
            <option value='title'>title</option>
            <option value='author'>author</option>
            <option value='subjects'>subject</option>
          </select>
        </div>
        <button type='submit' className='btn' onClick={HandleSubmit}>
          search
        </button>
      </form>
      {!clickedSingleBoook && (
        <section className='tablur-form'>
          {books && (
            <table>
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Author</th>
                  <th>First Release Year </th>
                  <th>More Details</th>
                </tr>
              </thead>
              <tbody>
                {books.slice(0, 30).map((book) => {
                  return (
                    <TabularForm
                      book={book}
                      putDetails={putDetails}
                      key={book.key}
                      setClickedSingleBook={setClickedSingleBook}
                      setDisplaySingleBook={setDisplaySingleBook}
                    />
                  );
                })}
              </tbody>
            </table>
          )}
        </section>
      )}
      {clickedSingleBoook && (
        <SingleBook
          displaySingleBook={displaySingleBook}
          setClickedSingleBook={setClickedSingleBook}
        />
      )}
    </>
  );
};

export default Search;

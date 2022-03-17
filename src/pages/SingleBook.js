import React from 'react';

const SingleBook = ({ displaySingleBook, setClickedSingleBook }) => {
  const { title, author_name, cover_i, publisher, language, subject } =
    displaySingleBook;
  return (
    <section className={!cover_i ? 'singlebook one' : 'singlebook'}>
      {cover_i && (
        <div className='img'>
          <img
            src={`https://covers.openlibrary.org/b/ID/${cover_i}-L.jpg`}
            alt={title}
          />
        </div>
      )}
      <div className='details'>
        <div className='headwithbtn'>
          <h3 className='head special'>{title}</h3>
          <button
            className='btn result'
            onClick={() => setClickedSingleBook(false)}
          >
            back to result
          </button>
        </div>
        <div className='main-box'>
          <h3 className='head'>authors:</h3>
          <div className='boxes'>
            {author_name &&
              author_name.map((auth, index) => {
                return (
                  <span className='box' key={index}>
                    <span>{auth}</span>
                  </span>
                );
              })}
          </div>
        </div>
        <div className='main-box'>
          <h3 className='head'>publishers:</h3>
          <div className='boxes'>
            {publisher &&
              publisher.map((pup, index) => {
                return (
                  <span className='box' key={index}>
                    <span>{pup}</span>
                  </span>
                );
              })}
          </div>
        </div>
        <div className='main-box'>
          <h3 className='head'>languages:</h3>
          <div className='boxes'>
            {language &&
              language.map((lang, index) => {
                return (
                  <span className='box' key={index}>
                    <span>{lang}</span>
                  </span>
                );
              })}
          </div>
        </div>
        <div className='main-box'>
          <h3 className='head'>subjects:</h3>
          <div className='boxes'>
            {subject &&
              subject.map((sub, index) => {
                return (
                  <span className='box' key={index}>
                    <span>{sub}</span>
                  </span>
                );
              })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleBook;

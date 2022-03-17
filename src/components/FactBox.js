import React, { useEffect, useState } from 'react';

const FactBox = ({ details, clicked }) => {
  const { title, author_name, cover_i, publisher, language, subject } = details;
  const [hide, setHide] = useState(false);
  // Function Remove Popup-box and overlay
  const removeItem = () => {
    setHide(true);
  };
  useEffect(() => {
    setHide(false);
  }, [clicked]);
  return (
    <>
      <div
        className={hide ? 'popup-overlay hidden' : 'popup-overlay'}
        onClick={removeItem}
      ></div>
      <div className={hide ? 'popup-box hidden' : 'popup-box'}>
        <span className='close-button' onClick={removeItem}>
          x
        </span>
        <h3 className='head'>{title}</h3>
        {cover_i && (
          <div className='img'>
            <img
              src={`https://covers.openlibrary.org/b/ID/${cover_i}-M.jpg`}
              alt={title}
            />
          </div>
        )}
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
    </>
  );
};

export default FactBox;

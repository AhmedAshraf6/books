import React, { useState } from 'react';
import FactBox from '../components/FactBox';
import Search from '../components/Search';

const Home = () => {
  // putDetails function
  const [details, setDetails] = useState('');
  const [clicked, setClicked] = useState(false);
  const putDetails = (book) => {
    setDetails(book);
    setClicked(!clicked);
  };
  return (
    <div className='container'>
      <Search putDetails={putDetails} />
      {details && <FactBox details={details} clicked={clicked} />}
    </div>
  );
};

export default Home;

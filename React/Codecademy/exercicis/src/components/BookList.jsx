import React from 'react';
import ListBooks from './ListBooks';
import PropTypes from 'prop-types';

const listBooks = [
  {
    id: 1,
    title: "Glory and War Stuff for Dads",
    author: "Sir Eldrich Van Hoorsgaard",
    weeksOnList: 10,
  },
  {
    id: 2,
    title: "The Crime Criminals!",
    author: "Brenda Sqrentun",
    weeksOnList: 2,
  },
  {
    id: 3,
    title: "Subprime Lending For Punk Rockers",
    author: "Malcolm McLaren",
    weeksOnList: 600,
  },
];

const BookList = () => {

  return (
    <div>
      <h2>Best Sellers de la història, els millors</h2>
      <ListBooks books={listBooks} />
    </div>
  )
}

ListBooks.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
  weeksOnList: PropTypes.number,
};

export default BookList;


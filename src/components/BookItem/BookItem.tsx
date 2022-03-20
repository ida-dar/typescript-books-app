import React from 'react';
import { Book } from './../../interfaces/Book.interface';
import './BookItem.css';

interface Props {
  book: Book;
  removeBook: (book: Book) => void,
}

const BooksItem: React.FC<Props> = ({ book, removeBook }) => {
  return (
    <li className='book-item'>
      {book.title} by {book.author}, {book.price}$
      <button onClick={() => removeBook(book)}>Remove book</button>
    </li>
  );
}

export default BooksItem;

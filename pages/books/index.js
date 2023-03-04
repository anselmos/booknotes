import Link from "next/link";
import React, { Fragment, useEffect, useState } from "react";
import BookTitle from "../../components/BookTitle";
import data from "../../asserts/data";
import { getBooks } from "../../utils/mongodb";

const BooksList = (props) => {
  // useEffect with useState:
  // const [books, setBooks] = useState([]);
  // useEffect(() => {
  // setBooks(dataFetchedFromAPI);
  // })
  console.log(props.books);
  return (
    <Fragment>
      <ul>
        {props.books.map((bookData) => (
          <li key={bookData.id}>
            <Link href={"/books/" + bookData.id + "/"}>
              <BookTitle title={bookData.bookTitle} />
            </Link>
          </li>
        ))}
      </ul>
    </Fragment>
  );
};

export async function getStaticProps() {
  // Not exposed to Client side! you can do secrets with http-async fetching!

  // fetch data from an API
  const books = await getBooks();
  return {
    props: {
      books: books.map((book) => ({
        id: book.bookId | null,
        bookTitle: book.bookTitle,
      })),
    },
  };
}

export default BooksList;

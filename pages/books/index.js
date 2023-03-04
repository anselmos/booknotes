import Link from "next/link";
import React, { Fragment, useEffect, useState } from "react";
import BookTitle from "../../components/BookTitle";
import data from "../../asserts/data";

const BooksList = (props) => {
  // useEffect with useState:
  // const [books, setBooks] = useState([]);
  // useEffect(() => {
  // setBooks(dataFetchedFromAPI);
  // })
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
  return {
    props: {
      books: data,
    },
  };
}

export default BooksList;

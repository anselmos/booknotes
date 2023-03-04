import React, { Fragment, useEffect, useState } from "react";
import { useRouter } from "next/router";
import Book from "../../../components/Book";
import Error from "next/error";
import { getBooks } from "../../../utils/mongodb";
const BookWithId = (props) => {
  const router = useRouter();
  const bookId = router.query.bookId;
  const thisBookData = props.books.find((book) => book.id == bookId);
  if (thisBookData) {
    return (
      <Fragment>
        <Book
          bookTitle={thisBookData.bookTitle}
          chapters={thisBookData.chapters | null}
        />
      </Fragment>
    );
  } else {
    // TODO This also makes it a bit worst for loading-effect that shows 404 instead of loading.
    return (
      <Error
        statusCode={404}
        title="No book with this id"
      />
    );
  }
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

// getStaticPaths is required for dynamic SSG pages
export async function getStaticPaths() {
  // Get the paths we want to pre-render based on books
  const books = await getBooks();
  const paths = books
    .filter((book) => book.bookId)
    .map((book) => ({
      params: { bookId: book.bookId.toString() },
    }));

  // the hardcoded way:
  // paths: [{ params: { bookId: "1" } }]
  return {
    paths,
    fallback: false, // can also be true or 'blocking'
    // TODO read about fallback=true!
  };
}
export default BookWithId;

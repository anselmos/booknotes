import React, { Fragment, useEffect, useState } from "react";
import { useRouter } from "next/router";
import Book from "../../../components/Book";
import Error from "next/error";
import { getBooks, getOneBook } from "../../../utils/mongodb";
const BookWithId = (props) => {
  console.log(props.thisBookData);
  const router = useRouter();
  const bookId = router.query.bookId;
  if (props.thisBookData) {
    return (
      <Fragment>
        <Book
          bookTitle={props.thisBookData.bookTitle}
          chapters={props.thisBookData.chapters}
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

export async function getStaticProps(context) {
  // Not exposed to Client side! you can do secrets with http-async fetching!

  // fetch data from an API
  const book = await getOneBook(context.params.bookId);
  if (!book) {
    // TODO this is a bit hacky way but works for now :P
    return {
      props: {
        thisBookData: {},
      },
    };
  }
  return {
    props: {
      thisBookData: {
        id: book.bookId,
        bookTitle: book.bookTitle,
        chapters: book.chapters,
      },
    },
  };
}

// getStaticPaths is required for dynamic SSG (static-site-generation) pages
export async function getStaticPaths() {
  // Get the paths we want to pre-render based on books
  const books = await getBooks();
  const paths = books
    .filter((book) => book.bookId)
    .map((book) => ({
      params: {
        bookId: book.bookId.toString(),
        chapters: book?.chapters?.toString(),
      },
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

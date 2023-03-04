import React, { Fragment, useEffect, useState } from "react";
import { useRouter } from "next/router";
import Book from "../../../components/Book";
import data from "../../../asserts/data";
import Error from "next/error";
const BookWithId = () => {
  const [loadedBooks, setLoadedBooks] = useState([]);
  useEffect(() => {
    // TODO add http request to get all books from db/backend.
    setLoadedBooks(data);
  }, []);
  const router = useRouter();
  const bookId = router.query.bookId;
  const thisBookData = loadedBooks.find((book) => book.id == bookId);
  if (thisBookData) {
    return (
      <Fragment>
        <Book
          bookTitle={thisBookData.bookTitle}
          chapters={thisBookData.chapters}
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

export default BookWithId;

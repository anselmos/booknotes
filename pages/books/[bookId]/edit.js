import React, { Fragment, useEffect, useState } from "react";
import data from "../../../asserts/data";
import Book from "../../../components/Book";
import { useRouter } from "next/router";
import BookTitleInput from "../../../components/BookTitleInput";

const EditBook = () => {
  const [loadedBooks, setLoadedBooks] = useState([]);
  useEffect(() => {
    // TODO add http request to get all books from db/backend.
    setLoadedBooks(data);
  }, []);
  const router = useRouter();
  const bookId = router.query.bookId;
  const thisBookData = loadedBooks.find((book) => book.id == bookId);
  const handleBookTitleChange = () => {
    // TODO implement book Title change.
    console.log("BookTitleChange - not yet implemented.");
  };
  if (thisBookData) {
    return (
      <Fragment>
        <BookTitleInput
          title={thisBookData.bookTitle}
          onBookTitleChange={handleBookTitleChange}
        />
        <Book
          bookTitle={thisBookData.bookTitle}
          chapters={thisBookData.chapters}
          inEditMode={true}
        />
      </Fragment>
    );
  }
};

export default EditBook;

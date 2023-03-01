import React, { Fragment } from "react";
import { useRouter } from "next/router";
import Book from "../../components/Book";
import data from "../../asserts/data";
const BookWithId = () => {
  const router = useRouter();
  const bookId = router.query.bookId;
  const thisBookData = data.find((book) => book.id == bookId);
  if (thisBookData) {
    return (
      <Fragment>
        <Book
          bookTitle={thisBookData.bookTitle}
          chapters={thisBookData.chapters}
        />
      </Fragment>
    );
  }
};

export default BookWithId;

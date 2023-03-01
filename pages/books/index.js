import Link from "next/link";
import React, { Fragment } from "react";
import BookTitle from "../../components/BookTitle";
import data from "../../asserts/data";

const BooksList = () => {
  return (
    <Fragment>
      <ul>
        {data.map((bookData) => (
          <li>
            <Link href={"/books/" + bookData.id + "/"}>
              <BookTitle title={bookData.bookTitle} />
            </Link>
          </li>
        ))}
      </ul>
    </Fragment>
  );
};

export default BooksList;

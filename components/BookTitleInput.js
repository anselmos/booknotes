import React, { Fragment } from "react";

const BookTitleInput = ({ title, onBookTitleChange }) => {
  return (
    <Fragment>
      <label htmlFor="bookTitle">Book Title</label>
      <br></br>

      <input
        placeholder="A Book Title"
        id="bookTitle"
        name="bookTitle"
        text="book Title"
        onChange={onBookTitleChange.bind(this)}
        defaultValue={title}
        //
      />
    </Fragment>
  );
};

export default BookTitleInput;

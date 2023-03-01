import React, { Fragment, useRef, useState } from "react";
import ChaptersInput from "../components/ChaptersInput";
const BooksList = () => {
  const refBookTitle = useRef(null);
  const [bookTitle, setBookTitle] = useState("");
  const [bookChapters, setBookChapters] = useState([]);

  const onSetBookChapters = (newChapter) => {
    setBookChapters((previousChapters) => [
      ...previousChapters?.filter((chapter) => chapter.id !== newChapter.id),
      newChapter,
    ]);
  };
  const onAddBook = () => {
    console.log("Book Title: ", bookTitle);
    console.log("Book Chapters: ", bookChapters);
  };
  const onBookTitleChange = (event) => {
    setBookTitle(event.target?.value);
  };

  return (
    <>
      <label htmlFor="bookTitle">Book Title</label>
      <br></br>
      <input
        placeholder="A Book Title"
        id="bookTitle"
        name="bookTitle"
        text="book Title"
        ref={refBookTitle}
        onChange={onBookTitleChange.bind(this)}
      />
      <br></br>
      <br></br>
      <label htmlFor="bookTitle">Chapter Name</label>
      <br></br>

      <ChaptersInput
        onSetBookChapters={onSetBookChapters.bind(this)}
      ></ChaptersInput>
      <button onClick={onAddBook}>Add new book!</button>
    </>
  );
};

export default BooksList;

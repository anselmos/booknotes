import React, { useRef, useState } from "react";
import ChaptersInput from "../components/ChaptersInput";
const BooksList = () => {
  const refBookTitle = useRef(null);
  const [bookTitle, setBookTitle] = useState("");
  const [bookChapters, setBookChapters] = useState([]);
  const [sectionsInputDiv, setSectionsInputDiv] = useState([]);

  const onSetBookChapters = (newChapter) => {
    setBookChapters((previousChapters) => [
      ...previousChapters?.filter((chapter) => chapter.id !== newChapter.id),
      newChapter,
    ]);
  };
  const onAddBook = () => {
    console.log("Book Title: ", bookTitle);
    console.log("Book Chapters: ", bookChapters);
    console.log("Book sectionsInputDiv: ", sectionsInputDiv);
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

      <ChaptersInput
        onSetBookChapters={onSetBookChapters.bind(this)}
        bookChapters={bookChapters}
        sectionsInputDiv={sectionsInputDiv}
        onSetSectionsInputDiv={setSectionsInputDiv}
      ></ChaptersInput>
      <button onClick={onAddBook}>Add new book!</button>
      <div>
        {/* TODO check sorting on this one.*/}
        Show of Chapters created:
        {bookChapters.map((chapter) => (
          <div key={chapter.id}>{chapter.name}</div>
        ))}
      </div>
    </>
  );
};

export default BooksList;

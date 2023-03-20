import { Router, useRouter } from "next/router";
import React, { useRef, useState } from "react";
import ChaptersInput from "../components/ChaptersInput";

const AddBook = () => {
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
  const router = useRouter();
  async function onAddBook() {
    const response = await fetch("/api/new-book", {
      method: "POST",
      body: JSON.stringify({
        bookTitle: bookTitle,
        chapters: bookChapters,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log(data);

    // use replace not to be able to go back
    router.push("/books");
  }
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

export default AddBook;

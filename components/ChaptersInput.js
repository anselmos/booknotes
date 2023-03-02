import React, { Fragment, useRef, useState, useEffect } from "react";
import SectionsInput from "./SectionsInput";
const ChaptersInput = ({
  bookChapters,
  onSetBookChapters,
  sectionsInputDiv,
  onSetSectionsInputDiv,
}) => {
  const onAddChapter = (data) => {
    const chapterId = "id" + new Date().getTime();
    onSetBookChapters({ id: chapterId, name: "" });
  };

  const handleChange = (chapterId, event) => {
    let chapterName = event.target?.value;
    onSetBookChapters({ id: chapterId, name: chapterName });
  };

  return (
    <Fragment>
      {bookChapters.map((chapter) => (
        <div key={chapter.id}>
          <label htmlFor="chapterName">{"Chapter Name: " + chapter.name}</label>
          <br></br>
          <input
            key={chapter.id}
            placeholder="Chapter Name"
            id="chapterName"
            name="chapterName"
            text="Chapter Name"
            onChange={handleChange.bind(this, chapter.id)}
          />
          <br></br>
          <SectionsInput
            chapterId={chapter.id}
            sectionsInputDiv={sectionsInputDiv}
            onSetSectionsInputDiv={onSetSectionsInputDiv.bind(this)}
          />
        </div>
      ))}
      <br></br>
      <button onClick={onAddChapter}>Add chapter!</button>
    </Fragment>
  );
};

export default ChaptersInput;

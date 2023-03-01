import React, { Fragment, useRef, useState, useEffect } from "react";

const ChaptersInput = ({ onSetBookChapters }) => {
  const [chaptersInputDiv, setChaptersInputDiv] = useState([]);

  const onAddChapter = (data) => {
    setChaptersInputDiv((previousChapters) => {
      return [...previousChapters, { id: "id" + new Date().getTime() }];
    });
  };

  const handleChange = (chapterId, event) => {
    let chapterName = event.target?.value;
    onSetBookChapters({ id: chapterId, name: chapterName });
  };

  return (
    <Fragment>
      {chaptersInputDiv.map((chapter) => (
        <div key={chapter.id}>
          <input
            key={chapter.id}
            placeholder="Chapter Name"
            id="chapterName"
            name="chapterName"
            text="Chapter Name"
            onChange={handleChange.bind(this, chapter.id)}
          />
          <br></br>
        </div>
      ))}
      <br></br>
      <button onClick={onAddChapter}>Add chapter!</button>
    </Fragment>
  );
};

export default ChaptersInput;

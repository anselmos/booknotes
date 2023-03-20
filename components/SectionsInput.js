import React, { Fragment, useRef, useState, useEffect } from "react";

const SectionsInput = ({
  chapterId,
  sectionsInputDiv,
  onSetSectionsInputDiv,
  chapter,
  onSetBookChapters,
}) => {
  const sectionId =
    "id-chapter-" + chapterId + "-section-" + new Date().getTime();
  const onAddSection = (data) => {
    onSetSectionsInputDiv((previousSections) => {
      return [...previousSections, { id: sectionId, chapterId: chapterId }];
    });
  };

  const handleChangeName = (sectionId, event) => {
    let sectionName = event.target?.value;
    let newSection = { id: sectionId, chapterId: chapterId, text: sectionName };
    onSetSectionsInputDiv((previousSections) => [
      ...previousSections?.filter((section) => section.id !== sectionId),
      newSection,
    ]);

    let existingSections = [];
    if (chapter.sections !== undefined) {
      existingSections = chapter.sections;
    }
    onSetBookChapters({
      id: chapter.id,
      name: chapter.name,
      sections: [
        ...existingSections.filter((section) => section.id !== sectionId),
        newSection,
      ],
    });
  };

  return (
    <Fragment>
      {sectionsInputDiv
        .filter((section) => section.chapterId == chapterId)
        .map((section) => (
          <div key={section.id}>
            <label htmlFor="sectionName">
              {section.name || "Section Name"}
            </label>
            <br></br>
            <input
              key={section.id}
              placeholder="Section Name"
              id="sectionName"
              name="sectionName"
              text="Section Name"
              onChange={handleChangeName.bind(this, section.id)}
            />
            <br></br>
            <label htmlFor="descriptionName">Description below</label>
            <br></br>
            <input
              key={section.id + "-DESCRIPTION"}
              placeholder="Description"
              id="descriptionName"
              name="descriptionName"
              text="Description here."
              // onChange={handleChangeDescription.bind(this, section.id)}
            />
            <br></br>
          </div>
        ))}
      <br></br>
      <button onClick={onAddSection}>Add section!</button>
    </Fragment>
  );
};

export default SectionsInput;

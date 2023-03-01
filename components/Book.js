import React, { Fragment, useState } from "react";
import { useRouter } from "next/router";

import BookTitle from "./BookTitle";
import Section from "./Section";
import Chapter from "./Chapter";
const Book = ({ bookTitle, chapters }) => {


  return (
    <Fragment>
      <BookTitle title={bookTitle} />
      {chapters.map((chapter, chapterId) => (
        <Chapter
          key={chapterId}
          title={chapter.title}
        >
          <ol>
            {chapter.sections.map((section, sectionId) => (
              <li
                type="1"
                key={sectionId}
              >
                <Section
                  text={section.text}
                  description={section.description}
                >
                  {section.props}
                </Section>
              </li>
            ))}
          </ol>
        </Chapter>
      ))}
    </Fragment>
  );
};

export default Book;

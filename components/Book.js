import React, { Fragment, useState } from "react";
import { useRouter } from "next/router";

import BookTitle from "./BookTitle";
import Section from "./Section";
import Chapter from "./Chapter";
import Link from "next/link";
const Book = ({ bookTitle, chapters, inEditMode }) => {
  const router = useRouter();
  const bookId = router.query.bookId;

  return (
    <Fragment>
      {inEditMode ? (
        <></>
      ) : (
        <Link href={"/books/" + bookId + "/edit"}>EDIT!</Link>
      )}
      <BookTitle title={bookTitle} />
      {chapters ? (
        chapters.map((chapter, chapterId) => (
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
        ))
      ) : (
        <div>No Chapters yet.</div>
      )}
    </Fragment>
  );
};

export default Book;

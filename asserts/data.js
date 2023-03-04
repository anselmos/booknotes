const data = [
  {
    id: "1",
    bookTitle: "Some fancy book title",
    chapters: [
      {
        id: "someChapterID1",
        title: "I am first chapter of this book",
        sections: [
          {
            id: "someSectionId1",
            text: "I am first section text of this book",
            description: "Some description of first section",
          },
          {
            id: "someSectionId2",
            text: "Second section",
            description: "Second section description.",
          },
          {
            id: "someSectionId3",
            text: "Third section",
            description: "Some long description on third section.",
          },
        ],
      },
      {
        id: "someChapterID2",
        title: "Second chapter",
        sections: [
          {
            id: "someSectionId1",
            text: "First section of second chapter.",
            description: "Description of first section in second chapter.",
          },
        ],
      },
    ],
  },
];

export default data;

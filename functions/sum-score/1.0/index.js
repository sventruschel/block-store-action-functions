const sumScore = async ({
  record: {
    data,
    model: { properties },
  },
}) => {
  const mockData = {
    id: 1,
    title: "blaat",
    question: {
      uuid: "adsadawdsad",
      description: "helemaal mooi",
      score: 15,
    },
    question2: {
      uuid: "aodksapokdsad",
      description: "sajdposajdosad",
      score: 10,
    },
    question3: {
      uuid: "aodk123123213sapokdsad",
      description: "sajdposajdosad",
      score: "1",
    },
  };

  const mockProperties = [
    { kind: "DATE_TIME", name: "updatedAt" },
    { kind: "OBJECT", name: "question" },
    { kind: "OBJECT", name: "question2" },
    { kind: "OBJECT", name: "question3" },
    { kind: "SERIAL", name: "id" },
    { kind: "DATE_TIME", name: "createdAt" },
  ];

  const getScore = (propertyName) => {
    if (
      !mockData[propertyName].score ||
      typeof mockData[propertyName].score != "number"
    )
      return 0;

    return mockData[propertyName].score;
  };

  const filteredProperties = mockProperties.filter(
    ({ kind }) => kind === "OBJECT"
  );

  const score = filteredProperties.reduce(
    (accumulator, { name: propertyName }) =>
      accumulator + getScore(propertyName),
    0
  );

  return { score };
};

export default sumScore;

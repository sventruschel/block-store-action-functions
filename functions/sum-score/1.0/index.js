const sumScore = async ({
  record: {
    data,
    model: { properties },
  },
}) => {
  const getScore = (propertyName) => {
    if (
      !data[propertyName].score ||
      typeof data[propertyName].score !== 'number'
    )
      return 0;

    return data[propertyName].score;
  };

  const filteredProperties = properties.filter(({ kind }) => kind === 'OBJECT');

  const score = filteredProperties.reduce(
    (accumulator, { name: propertyName }) =>
      accumulator + getScore(propertyName),
    0,
  );

  return { score };
};

export default sumScore;

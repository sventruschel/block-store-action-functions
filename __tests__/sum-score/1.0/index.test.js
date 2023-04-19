import sumScore from '../../../functions/sum-score/1.0';

const model = {
  name: 'Order',
  properties: [
    { kind: 'SERIAL', name: 'id' },
    { kind: 'OBJECT', name: 'question' },
    { kind: 'OBJECT', name: 'question2' },
  ],
};

describe('Sum score 1.0', () => {
  test('outputs the correct number', async () => {
    const { score } = await sumScore({
      record: {
        data: {
          id: 1,
          question: {
            uuid: 'adsadawdsad',
            description: 'helemaal mooi',
            score: 15,
          },
          question2: {
            uuid: 'aodksapokdsad',
            description: 'sajdposajdosad',
            score: 10,
          },
        },
        model,
      },
    });

    expect(score).toBe(25);
  });

  test('score property is not a number gets ignored', async () => {
    const { score } = await sumScore({
      record: {
        data: {
          id: 1,
          question: {
            uuid: 'adsadawdsad',
            description: 'helemaal mooi',
            score: 15,
          },
          question2: {
            uuid: 'aodksapokdsad',
            description: 'sajdposajdosad',
            score: '10',
          },
        },
        model,
      },
    });

    expect(score).toBe(15);
  });

  test('score property not present adds 0', async () => {
    const { score } = await sumScore({
      record: {
        data: {
          id: 1,
          question: {
            uuid: 'adsadawdsad',
            description: 'helemaal mooi',
            score: 15,
          },
          question2: {
            uuid: 'aodksapokdsad',
            description: 'sajdposajdosad',
          },
        },
        model,
      },
    });

    expect(score).toBe(15);
  });

  test('object property has no values', async () => {
    const { score } = await sumScore({
      record: {
        data: {
          id: 1,
          question: {
            uuid: 'adsadawdsad',
            description: 'helemaal mooi',
            score: 15,
          },
          question2: {
            uuid: 'aodksapokdsad',
            description: 'sajdposajdosad',
            score: null,
          },
        },
        model,
      },
    });

    expect(score).toBe(15);
  });
});

test("sumScore outputs the correct number", async () => {
  const output = await $app["sumScore 1.0"]({
    record: {
      data: {
        createdAt: "2023-04-12T10:03:31+02:00",
        decimal: null,
        id: 1,
        name: "Order 1",
        rating: "",
        updatedAt: "2023-04-12T10:03:31+02:00",
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
      },
      model: {
        name: "Order",
        properties: [
          { kind: "DATE_TIME", name: "updatedAt" },
          { kind: "DECIMAL", name: "decimal" },
          { kind: "STRING", name: "rating" },
          { kind: "STRING", name: "name" },
          { kind: "SERIAL", name: "id" },
          { kind: "DATE_TIME", name: "createdAt" },
          { kind: "OBJECT", name: "question" },
          { kind: "OBJECT", name: "question2" },
        ],
      },
    },
  });
  assert(output, { score: 25 });
});
test("sumScore score property is not a number gets ignored", async () => {
  const output = await $app["sumScore 1.0"]({
    record: {
      data: {
        createdAt: "2023-04-12T10:03:31+02:00",
        decimal: null,
        id: 1,
        name: "Order 1",
        rating: "",
        updatedAt: "2023-04-12T10:03:31+02:00",
        question: {
          uuid: "adsadawdsad",
          description: "helemaal mooi",
          score: 15,
        },
        question2: {
          answer: "blaat",
          body: "blaat",
          title: "blaat",
          uuid: "adsadawdsad",
          description: "helemaal mooi",
          score: 10,
          type: null
        },
        question3: {
          answer: "blaat",
          body: "blaat",
          title: "blaat",
          uuid: "adsadawdsad",
          description: "helemaal mooi",
          score: '15',
          type: null
        },
      },
      model: {
        name: "Order",
        properties: [
          { kind: "DATE_TIME", name: "updatedAt" },
          { kind: "DECIMAL", name: "decimal" },
          { kind: "STRING", name: "rating" },
          { kind: "STRING", name: "name" },
          { kind: "SERIAL", name: "id" },
          { kind: "DATE_TIME", name: "createdAt" },
          { kind: "OBJECT", name: "question" },
          { kind: "OBJECT", name: "question2" },
          { kind: "OBJECT", name: "question3" },
        ],
      },
    },
  });
  assert(output, { score: 25 });
});
test("sumScore score property not present adds 0", async () => {
  const output = await $app["sumScore 1.0"]({
    record: {
      data: {
        createdAt: "2023-04-12T10:03:31+02:00",
        decimal: null,
        id: 1,
        name: "Order 1",
        rating: "",
        updatedAt: "2023-04-12T10:03:31+02:00",
        question: {
          answer: "blaat",
          body: "blaat",
          title: "blaat",
          uuid: "adsadawdsad",
          description: "helemaal mooi",
          score: 15,
          type: null
        },
        question2: {
          answer: "blaat",
          body: "blaat",
          title: "blaat",
          uuid: "adsadawdsad",
          score: null,
          description: "helemaal mooi",
          type: null
        },
      },
      model: {
        name: "Order",
        properties: [
          { kind: "DATE_TIME", name: "updatedAt" },
          { kind: "DECIMAL", name: "decimal" },
          { kind: "STRING", name: "rating" },
          { kind: "STRING", name: "name" },
          { kind: "SERIAL", name: "id" },
          { kind: "DATE_TIME", name: "createdAt" },
          { kind: "OBJECT", name: "question" },
          { kind: "OBJECT", name: "question2" },
        ],
      },
    },
  });
  assert(output, { score: 15 });
});
test("sumScore Object property has no values", async () => {
  const output = await $app["sumScore 1.0"]({
    record: {
      data: {
        createdAt: "2023-04-12T10:03:31+02:00",
        decimal: null,
        id: 1,
        name: "Order 1",
        rating: "",
        updatedAt: "2023-04-12T10:03:31+02:00",
        question: {
          answer: "blaat",
          body: "blaat",
          title: "blaat",
          uuid: "adsadawdsad",
          description: "helemaal mooi",
          score: 15,
          type: null
        },
        question2: {
          answer: "blaat",
          body: "blaat",
          title: "blaat",
          uuid: "adsadawdsad",
          description: "helemaal mooi",
          score: "15",
          type: null
        },
        question3: {
          answer: null,
          body: null,
          title: null,
          uuid: null,
          description: null,
          score: null,
          type: null
        },
      },
      model: {
        name: "Order",
        properties: [
          { kind: "DATE_TIME", name: "updatedAt" },
          { kind: "DECIMAL", name: "decimal" },
          { kind: "STRING", name: "rating" },
          { kind: "STRING", name: "name" },
          { kind: "SERIAL", name: "id" },
          { kind: "DATE_TIME", name: "createdAt" },
          { kind: "OBJECT", name: "question" },
          { kind: "OBJECT", name: "question2" },
          { kind: "OBJECT", name: "question3" },

        ],
      },
    },
  });
  assert(output, { score: 15 });
});



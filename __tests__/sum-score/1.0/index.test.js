test("sumScore 1.0", async () => {
  const output = await $app["sumScore 1.0"]({
    createdAt: "2023-04-12T10:03:31+02:00",
    decimal: null,
    id: 1,
    name: "Order 1",
    rating: "",
    updatedAt: "2023-04-12T10:03:31+02:00",
  });
  assert(output, { score: 25 });
});

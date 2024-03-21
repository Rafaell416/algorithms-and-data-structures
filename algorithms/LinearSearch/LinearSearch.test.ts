import linear_search from "./LinearSearch";

test("linear search array", function() {

  const foo = [1, 3, 4, 69, 71, 81, 90, 99, 420, 1337, 69420];
  expect(linear_search(foo, 69)).toEqual(true);
  expect(linear_search(foo, 1336)).toEqual(false);
  expect(linear_search(foo, 69420)).toEqual(true);
  expect(linear_search(foo, 69421)).toEqual(false);
  expect(linear_search(foo, 1)).toEqual(true);
  expect(linear_search(foo, 0)).toEqual(false);
});
const sorting = require("../../app");

describe("Books names test suit", () => {
  it("Books names should be sorted in ascending order", () => {
    expect(
      sorting.sortByName([
        "Гарри Поттер",
        "Властелин Колец",
        "Волшебник изумрудного города",
      ]),
    ).toEqual([
      "Властелин Колец",
      "Волшебник изумрудного города",
      "Гарри Поттер",
    ]);
  });

  it("Books names with identical names should keep order", () => {
    expect(
      sorting.sortByName(["Гарри Поттер", "Гарри Поттер", "Властелин Колец"]),
    ).toEqual([
      "Властелин Колец", // ← В идёт перед Г
      "Гарри Поттер",
      "Гарри Поттер",
    ]);
  });

  it("Books names should be sorted case-insensitively", () => {
    expect(
      sorting.sortByName([
        "гарри поттер",
        "Властелин Колец",
        "волшебник изумрудного города",
      ]),
    ).toEqual([
      "Властелин Колец",
      "волшебник изумрудного города",
      "гарри поттер",
    ]);
  });

  it("should return empty array for empty input", () => {
    expect(sorting.sortByName([])).toEqual([]);
  });

  it("should return single element array unchanged", () => {
    expect(sorting.sortByName(["Книга"])).toEqual(["Книга"]);
  });
});

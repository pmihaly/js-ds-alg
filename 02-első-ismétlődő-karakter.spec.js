const elsőIsmétlődőKarakter = require("./02-első-ismétlődő-karakter");

describe("find first reoccurring character", () => {
  it("should return 'A' to 'STARWARS'", () => {
    expect(elsőIsmétlődőKarakter("STARWARS")).toBe("A");
  });

  it("should return undefined when nothing is given", () => {
    expect(elsőIsmétlődőKarakter("")).toBe(undefined);
  });

  it("should return undefined when no reoccurrence is found", () => {
    expect(elsőIsmétlődőKarakter("QWER")).toBe(undefined);
  });
});

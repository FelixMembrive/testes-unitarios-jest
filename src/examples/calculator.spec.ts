import { sum } from "./calculator";

describe("Função soma", () => {
  it("quando eu passar 2 e 2 deve me retornar 4", () => {
    expect(sum(2, 2)).toBe(4);

    expect(sum(3, 2)).toBe(5);
  });

  // it("quando eu passar 2 e 2 como string deve me retornar 4", () => {
  //   expect(sum("2", "2")).toBe(4);
  // });

  // it("deve retorna erro sempre que não for passado um parâmetro para somar", () => {
  //   expect(() => {
  //     sum("", 2);
  //   }).toThrowError();

  //   expect(() => {
  //     sum([2, 2], []);
  //   }).toThrowError();

  //   expect(() => {
  //     sum({}, "2");
  //   }).toThrowError();
  // });
});

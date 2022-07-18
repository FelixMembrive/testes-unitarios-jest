import axios from "axios";

import viaCep from "./viaCep";

jest.mock("axios");

const mocketResult = {
  bairro: "Vila Tibério",
  cep: "14050-040",
  complemento: "",
  ddd: "16",
  gia: "5824",
  ibge: "3543402",
  localidade: "Ribeirão Preto",
  logradouro: "Rua Coronel Luiz da Cunha",
  siafi: "6969",
  uf: "SP",
};

describe("teste busca cep", () => {
  it("deve me retornar informações corretas com um cep válido", async () => {
    axios.get.mockResolvedValue({ data: mocketResult });
    const result = await viaCep.get("14050040");

    expect(result).toEqual(mocketResult);
  });

  it("deve me retornar erro ao passar um cep invalido mas com 8 caracteres", async () => {
    axios.get.mockResolvedValue({ data: { erro: "true" } });
    const result = await viaCep.get("12312313");

    expect(result).toEqual({ erro: "true" });
  });

  // it("deve me retornar erro ao passar um cep invalido com menos de 8 caracteres", async () => {
  //   expect(async () => {
  //     await viaCep.get("12312");
  //   }).toThrow();
  // });
});

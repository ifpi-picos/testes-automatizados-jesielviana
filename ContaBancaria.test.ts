import { describe, expect, test } from "bun:test";
import ContaBancaria from "./ContaBancaria.ts";

describe("Testando classe ContaBancaria", () => {
  test("Testando depositar valor positivo", () => {
    const conta = new ContaBancaria();
    conta.depositar(100);
    expect(conta.consultarSaldo()).toBe(100);
  });

  test("Testando depositar valor negativo", () => {
    const conta = new ContaBancaria();
    conta.depositar(-100);
    expect(conta.consultarSaldo()).toBe(0);
  });
});

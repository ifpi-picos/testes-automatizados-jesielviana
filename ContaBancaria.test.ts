import { beforeEach, describe, expect, test } from "bun:test";
import ContaBancaria from "./ContaBancaria.ts";

describe("Testando classe ContaBancaria", () => {
  let conta: ContaBancaria;
  beforeEach(() => {
    conta = new ContaBancaria();
  });

  test("Testando depositar valor positivo", () => {
    conta.depositar(100);
    expect(conta.consultarSaldo()).toBe(100);
  });

  test("Testando depositar valor negativo", () => {
    conta.depositar(-100);
    expect(conta.consultarSaldo()).toBe(0);
  });
});

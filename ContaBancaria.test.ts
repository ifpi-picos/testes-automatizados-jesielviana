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

  test("Deve sacar um valor com saldo suficiente", () => {
    conta.depositar(100);
    expect(conta.sacar(40)).toBe(40);
    expect(conta.consultarSaldo()).toBe(60);
  });

  test("Deve lançar um erro ao tentar sacar com saldo insuficiente", () => {
    conta.depositar(100);
    expect(() => {
      conta.sacar(150);
    }).toThrow("Saldo insuficiente");
    expect(conta.consultarSaldo()).toBe(100);
  });

});

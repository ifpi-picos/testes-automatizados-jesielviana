export default class ContaBancaria {
  private saldo = 0;

  public depositar(valor: number) {
    if (valor > 0) {
      this.saldo += valor;
    }
  }

  public consultarSaldo() {
    return this.saldo;
  }
}

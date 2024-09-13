export default class ContaBancaria {
  private numeroConta:number;
  private agencia = 1;
  private saldo = 0;
  private extrato: string[];

  public depositar(valor: number) {
    if (valor > 0) {
      this.saldo += valor;
    }
  }

  public sacar(valor: number){
    if(this.saldo >= valor){
      this.saldo -= valor
      return valor;
    }
    throw new Error("Saldo insuficiente");
  }

  public consultarSaldo() {
    return this.saldo;
  }
}

export type BankSlip = {
  id: string;
  descrição: string;
  data_lancamento: string;
  data_vencimento: string;
  valor: string;
  observacao: string;
  cli_nome: string;
  valor_atualizado: string;
  referencia_mensalidade: string;
  status: string;
};

export type GetBankSlips = {
  rows: BankSlip[];
};

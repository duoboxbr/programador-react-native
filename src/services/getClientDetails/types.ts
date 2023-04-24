export type ClientInfo = {
  id: string;
  nome: string;
  nome_fantasia: string;
  cpf: string;
  cnpj: string;
  tipo_pessoa: 'J' | 'F';
  endereco: string;
  endereco_numero: string;
  endereco_bairro: string;
  cidade: string;
  uf: string;
  email: string;
};

export type ServiceInfo = {
  clientes: ClientInfo;
};

export type GetClientDetails = {
  servicos: ServiceInfo[];
};

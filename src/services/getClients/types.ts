export type ClientRecords = {
  id: number;
  nome: string;
  plan_nome: string;
  pl_status: string;
  pl_id: string;
  tipo_servico: string;
};

export type GetClients = {
  page: number;
  count: string;
  total_pages: number;
  registros: ClientRecords[];
};

export type FormDataParams = {type: string | null; value: string | undefined};

export type ServiceDetailsCardProps = {
  id: string;
  name: string;
  fantasyName: string;
  cpf: string;
  cnpj: string;
  typePerson: 'J' | 'F';
  address: string;
  addressNumber: string;
  neighborhood: string;
  city: string;
  state: string;
  email: string;
  onPress: () => void;
};

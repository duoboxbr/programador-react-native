type TypeKey = 'cpf' | 'cnpj' | 'email' | null;

const REGEX_TYPES: Record<string, TypeKey> = {
  '^\\d{11}$': 'cpf',
  '^\\d{14}$': 'cnpj',
  '^[^s@]+@[^s@]+.[^s@]+$': 'email',
};

export const getType = (searchText: string | undefined): TypeKey => {
  if (!searchText) {
    return null;
  }

  const cleanedText = searchText.replace(/[^a-zA-Z0-9@]/g, '');
  if (cleanedText.length === 0) {
    return null;
  }

  const matchedRegex = Object.keys(REGEX_TYPES).find(regex =>
    new RegExp(regex).test(cleanedText),
  );

  return matchedRegex ? REGEX_TYPES[matchedRegex] : null;
};

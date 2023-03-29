export const getType = (searchText: string | undefined) => {
  if (!searchText) {
    return null;
  }

  const cleanedText = searchText.replace(/[^a-zA-Z0-9]/g, '');

  if (cleanedText.length === 0) {
    return null;
  }

  if (/^\d{11}$/.test(cleanedText)) {
    return 'cpf';
  }

  if (/^\d{14}$/.test(cleanedText)) {
    return 'cnpj';
  }

  if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(searchText)) {
    return 'email';
  }

  return null;
};

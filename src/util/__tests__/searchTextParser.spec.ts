import {getType} from '../searchTextParser';

describe('getType', () => {
  it('should return null when searchText is undefined', () => {
    expect(getType(undefined)).toBeNull();
  });

  it('should return cpf when searchText is a valid CPF', () => {
    expect(getType('12345678901')).toBe('cpf');
  });

  it('should return cpf when searchText is a valid CPF with score', () => {
    expect(getType('123.456.789-01')).toBe('cpf');
  });

  it('should return cnpj when searchText is a valid CNPJ', () => {
    expect(getType('12345678901234')).toBe('cnpj');
  });

  it('should return cnpj when searchText is a valid CNPJ with score', () => {
    expect(getType('12.345.678/9012-34')).toBe('cnpj');
  });

  it('should return null when searchText is an invalid value', () => {
    expect(getType('invalid-value')).toBeNull();
  });

  it('should return null when searchText length is 0', () => {
    expect(getType('.-/')).toBeNull();
  });
});

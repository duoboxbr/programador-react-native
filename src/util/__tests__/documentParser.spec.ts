import {formatCpf, formatCnpj} from '../documentParser';

describe('Format', () => {
  describe('formatCpf', () => {
    it('should return a valid CPF format', () => {
      const cpf = '12345678909';
      const expectedResult = '123.456.789-09';
      expect(formatCpf(cpf)).toBe(expectedResult);
    });
  });

  describe('formatCnpj', () => {
    it('should return a valid CNPJ format', () => {
      const cnpj = '12345678901234';
      const expectedResult = '12.345.678/9012-34';
      expect(formatCnpj(cnpj)).toBe(expectedResult);
    });
  });
});

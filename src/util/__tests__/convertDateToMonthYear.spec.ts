import {formatDate} from '../convertDateToMonthYear';

describe('formatDate', () => {
  it('should return a string in the format MM/YYYY when given a string in the format YYYY-MM', () => {
    const date = '2023-01-01';
    const expected = '01/2023';
    expect(formatDate(date)).toBe(expected);
  });
});

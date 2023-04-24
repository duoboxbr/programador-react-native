import {api} from '../../api';
import {postCloseBankSlip} from '../';

const dataObject = {
  id: '4',
  value: '50',
  date: '12/01/2023',
  payment: '5',
};

describe('postCloseBankSlip', () => {
  it('should return a valid mock response', async () => {
    const authorization = 'valid_authorization';
    const expectedResponse = {};
    api.post = jest.fn().mockResolvedValue(expectedResponse);
    const actualResponse = await postCloseBankSlip(authorization, dataObject);
    expect(actualResponse).toEqual(expectedResponse);
    expect(api.post).toHaveBeenCalledTimes(1);
  });
});

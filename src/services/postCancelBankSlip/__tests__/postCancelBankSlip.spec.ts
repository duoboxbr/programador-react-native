import {api} from '../../api';
import {postCancelBankSlip} from '../';

const dataObject = {
  id: '1',
  cancelMessage: 'canceled',
};

describe('postCancelBankSlip', () => {
  it('should return a valid mock response', async () => {
    const authorization = 'valid_authorization';
    const expectedResponse = {};
    api.post = jest.fn().mockResolvedValue(expectedResponse);
    const actualResponse = await postCancelBankSlip(authorization, dataObject);
    expect(actualResponse).toEqual(expectedResponse);
    expect(api.post).toHaveBeenCalledTimes(1);
  });
});

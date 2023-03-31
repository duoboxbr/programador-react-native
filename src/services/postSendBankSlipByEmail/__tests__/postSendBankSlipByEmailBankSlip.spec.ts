import {api} from '../../api';
import {postSendBankSlipByEmail} from '../';

const dataObject = {
  id: '1',
  email: 'example@email.com',
};

describe('postSendBankSlipByEmail', () => {
  it('should return a valid mock response', async () => {
    const authorization = 'valid_authorization';
    const expectedResponse = {};
    api.post = jest.fn().mockResolvedValue(expectedResponse);
    const actualResponse = await postSendBankSlipByEmail(
      authorization,
      dataObject,
    );
    expect(actualResponse).toEqual(expectedResponse);
    expect(api.post).toHaveBeenCalledTimes(1);
  });
});

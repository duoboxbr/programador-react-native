import {api} from '../../api';
import {getBankSlips} from '../';

const id = 'valid_id';

describe('getBankSlips', () => {
  it('should return a valid mock response', async () => {
    const authorization = 'valid_authorization';
    const expectedResponse = {};
    api.post = jest.fn().mockResolvedValue(expectedResponse);
    const actualResponse = await getBankSlips(authorization, id);
    expect(actualResponse).toEqual(expectedResponse);
    expect(api.post).toHaveBeenCalledTimes(1);
  });
});

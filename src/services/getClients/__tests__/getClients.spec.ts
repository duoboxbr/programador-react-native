import {api} from '../../api';
import {getClients} from '../';

const dataObject = {
  type: 'email',
  value: '11122233344',
};

describe('getClients', () => {
  it('should return a valid mock response', async () => {
    const authorization = 'valid_authorization';
    const expectedResponse = {};
    api.post = jest.fn().mockResolvedValue(expectedResponse);
    const actualResponse = await getClients(authorization, dataObject);
    expect(actualResponse).toEqual(expectedResponse);
    expect(api.post).toHaveBeenCalledTimes(1);
  });
});

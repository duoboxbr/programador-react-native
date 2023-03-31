import {api} from '../../api';
import {getClientsDetails} from '../';

const id = 'valid_id';

describe('getClientsDetails', () => {
  it('should return a valid mock response', async () => {
    const authorization = 'valid_authorization';
    const expectedResponse = {};
    api.post = jest.fn().mockResolvedValue(expectedResponse);
    const actualResponse = await getClientsDetails(authorization, id);
    expect(actualResponse).toEqual(expectedResponse);
    expect(api.post).toHaveBeenCalledTimes(1);
  });
});

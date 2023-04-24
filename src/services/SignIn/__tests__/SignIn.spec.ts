import {api} from '../../api';
import {signIn} from '../';

const dataObject = {
  username: 'username',
  password: 'password',
};

describe('signIn', () => {
  it('should return a valid mock response', async () => {
    const expectedResponse = {};
    api.post = jest.fn().mockResolvedValue(expectedResponse);
    const actualResponse = await signIn(dataObject);
    expect(actualResponse).toEqual(expectedResponse);
    expect(api.post).toHaveBeenCalledTimes(1);
  });
});

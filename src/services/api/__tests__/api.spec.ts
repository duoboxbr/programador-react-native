import axios from 'axios';

const baseURL = 'https://dev-react-native.ispbox.com.br/';
const headers = {
  'Content-Type': 'multipart/form-data',
  'X-Requested-With': 'XMLHttpRequest',
};

describe('api', () => {
  it('should have the correct baseURL', () => {
    const api = axios.create({
      baseURL,
      headers,
    });
    expect(api.defaults.baseURL).toEqual(baseURL);
  });

  it('should have the correct Content-Type header', () => {
    const api = axios.create({
      baseURL,
      headers,
    });
    expect(api.defaults.headers['Content-Type']).toEqual('multipart/form-data');
  });

  it('should have the correct X-Requested-With header', () => {
    const api = axios.create({
      baseURL,
      headers,
    });
    expect(api.defaults.headers['X-Requested-With']).toEqual('XMLHttpRequest');
  });
});

global.FormData = jest.fn().mockImplementation(() => ({
  append: jest.fn(),
  get: jest.fn(),
}));

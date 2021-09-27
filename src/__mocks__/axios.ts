export default {
  get: jest.fn().mockResolvedValue({
    data: {},
  }),
  interceptors: {
    request: {
      use: jest.fn(),
    },
    response: {
      use: jest.fn(),
    },
  },
};

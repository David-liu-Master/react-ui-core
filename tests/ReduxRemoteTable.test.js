import { constructElasticPagingURL } from '../src/ReduxRemoteTable';

describe('ReduxRemoteTable constructElasticPagingURL', () => {
  it('should construct', () => {
    const constructPagingURL = constructElasticPagingURL('/v1/items');
    const url = constructPagingURL(3, 5, 'asc', 'member');
    const expectedURL = `/v1/items?query=%7B%22offset%22%3A15%2C%22limit%22%3A5%2C%22sort%22%3A%7B%22member%22%3A%22asc%22%7D%7D`;

    expect(url).toEqual(expectedURL);
  });
});

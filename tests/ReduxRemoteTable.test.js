import { constructElasticPagingURL } from '../src/ReduxRemoteTable';

describe('ReduxRemoteTable constructElasticPagingURL', () => {
  it('should construct', () => {
    const constructPagingURL = constructElasticPagingURL('/v1/items');
    const url = constructPagingURL(3, 5, 'asc', 'member');
    const expectedURL = `/v1/items?query="{"offset":15,"limit":5,"sort":{"member":"asc"}}"`;

    expect(url).toEqual(expectedURL);
  });
});

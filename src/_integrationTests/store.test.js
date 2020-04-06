import { testStore } from "../utils";
import moxios from 'moxios';
import { fetchPosts } from "../actions";

describe('Test for store', () => {

  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  test('Store is updated correctly', async () => {

    const expectedState = [{
      title: 'Test title 1',
      body: 'Test body'
    }, {
      title: 'Test title 2',
      body: 'Test body'
    }, {
      title: 'Test title 3',
      body: 'Test body'
    }];

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        state: 200,
        response: expectedState
      })
    });

    const store = testStore();
    await store.dispatch(fetchPosts());

    const newState = store.getState();
    expect(newState.post).toBe(expectedState);
  })
});
import reducer from '../../../src/redux/item-renderer/reducer';
import { changeResponse, changeNote } from '../../../src/redux/item-renderer/actions';

const mockState = {
  note: '',
  responses: {
    0: 'Hi',
    1: 'Test'
  }
};

describe('ItemRenderer reducer', () => {
  it('should change note', () => {
    const newNote = 'New note';
    const newState = reducer(mockState, changeNote(newNote));
    expect(newState.note).toBe(newNote);
    expect(newState.responses).toEqual(mockState.responses);
  });

  it('should change reponse', () => {
    const newResponse = 'New response for 0';
    let newState = reducer(mockState, changeResponse(newResponse, 0));
    expect(newState.responses[0]).toBe(newResponse);

    const addResponse = 'Add response for 4';
    newState = reducer(mockState, changeResponse(addResponse, 4));
    expect(newState.responses).toEqual({
      ...mockState.responses,
      4: addResponse
    });
  });
});

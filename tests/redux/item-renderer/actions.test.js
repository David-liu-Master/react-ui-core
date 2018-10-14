import { changeNote, changeResponse } from '../../../src/redux/item-renderer/actions';

describe('ItemRenderer actions', () => {
  it('should create changeNote action', () => {
    const note = 'Hi this is a note';
    expect(changeNote(note)).toMatchSnapshot();
  });

  it('should create changeResponse action', () => {
    const response = 'This is a response';
    const id = 2;
    expect(changeResponse(response, id)).toMatchSnapshot();
  });
});

import {
  toggleDrawer
} from '../../../src/redux/layout/actions';

describe('layout actions', () => {
  it('should create toggleDrawer action', () => {
    expect(toggleDrawer()).toMatchSnapshot()
  })
})

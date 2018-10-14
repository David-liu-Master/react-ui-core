import { createSelector } from 'reselect';

export const getLayout = state => state.layout;

export const getDrawerOpen = createSelector([getLayout], layout => {
  return layout.drawerOpen;
});

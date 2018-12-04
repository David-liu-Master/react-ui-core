import { createSelector } from 'reselect';

export const getLayout = state => state.core.layout;

export const getDrawerOpen = createSelector(
  [getLayout],
  layout => {
    return layout.drawerOpen;
  }
);

export const getRemoteSections = createSelector(
  [getLayout],
  layout => layout.remoteSections
);

export const getAppBarTitle = createSelector(
  [getLayout],
  layout => layout.appBarTitle
);

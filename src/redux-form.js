import { reduxForm, formValueSelector as fVS } from 'redux-form';

const getForm = state => state.core.form;

export * from 'redux-form';

export const withReduxForm = options =>
  reduxForm({ ...options, getFormState: getForm });

export const reduxFormValueSelector = form => fVS(form, getForm);

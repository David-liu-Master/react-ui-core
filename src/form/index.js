import { reduxForm } from 'redux-form';

const getForm = state => state.core.form;

export const withForm = options =>
  reduxForm({ ...options, getFormState: getForm });

export * from 'redux-form';

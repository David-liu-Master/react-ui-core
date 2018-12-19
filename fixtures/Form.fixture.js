import React from 'react';
import { Field, withReduxForm } from '../src/form';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import Form from '../src/form/Form';
import FormHeader from '../src/form/FormHeader';
import FormSection from '../src/form/FormSection';
import FormSectionContent from '../src/form/FormSectionContent';
import FormSectionHeader from '../src/form/FormSectionHeader';
import FormActions from '../src/form/FormActions';
import TextField from '../src/form/TextField';

const validate = values => {
  const errors = {};
  const requiredFields = ['username', 'firstName'];
  requiredFields.forEach(field => {
    if (!values[field]) {
      errors[field] = 'Required';
    }
  });
  return errors;
};

let ContactForm = props => {
  const { handleSubmit, reset, pristine, submitting } = props;
  return (
    <Form onSubmit={handleSubmit}>
      <FormHeader>Example</FormHeader>
      <FormSection>
        <FormSectionHeader caption="Section caption">Section</FormSectionHeader>
        <FormSectionContent>
          <Field
            required
            name="username"
            label="Username"
            component={TextField}
          />
        </FormSectionContent>
      </FormSection>
      <FormSection>
        <FormSectionHeader>Section 2</FormSectionHeader>
        <FormSectionContent>
          <Field
            required
            name="firstName"
            label="First Name"
            component={TextField}
          />
          <Field
            fullWidth
            name="lastName"
            label="Last Name"
            component={TextField}
          />
          <Field
            select
            fullWidth
            name="gender"
            label="Gender"
            component={TextField}
          >
            <MenuItem value="male">Male</MenuItem>
            <MenuItem value="female">Female</MenuItem>
          </Field>
          <Field
            fullWidth
            multiline
            name="bio"
            label="Bio"
            rows={5}
            component={TextField}
          />
        </FormSectionContent>
      </FormSection>
      <FormActions>
        <Button disabled={pristine || submitting} onClick={reset}>
          Reset
        </Button>
        <Button
          disabled={pristine || submitting}
          color="primary"
          variant="contained"
          type="submit"
        >
          Submit
        </Button>
      </FormActions>
    </Form>
  );
};

ContactForm = withReduxForm({
  // a unique name for the form
  form: 'contact',
  validate
})(ContactForm);

export default [
  {
    component: ContactForm
  }
];

import React from 'react';
import { Field, FieldArray, withReduxForm } from '../src/form';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import Form from '../src/form/Form';
import FormHeader from '../src/form/FormHeader';
import FormSection from '../src/form/FormSection';
import FormSectionContent from '../src/form/FormSectionContent';
import FormSectionHeader from '../src/form/FormSectionHeader';
import FormActions from '../src/form/FormActions';
import TextField from '../src/form/TextField';
import TextFieldArray from '../src/form/TextFieldArray';
import CodeField from '../src/form/CodeField';
import CodeFieldArray from '../src/form/CodeFieldArray';
import NumberField from '../src/form/NumberField';
import RegexField from '../src/form/RegexField';
import ChoiceField from '../src/form/ChoiceField';
import SliderField from '../src/form/SliderField';
import SelectField from '../src/form/SelectField';
import TimeField from '../src/form/TimeField';
import DateField from '../src/form/DateField';

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
          <FieldArray
            name="texts"
            label="Texts"
            helperText="Help me!"
            component={TextFieldArray}
          />
          <Field
            name="slider"
            label="Slider"
            min={5}
            step={5}
            max={50}
            fullWidth
            helperText="Min 5, Max 50, Step 5"
            component={SliderField}
          />
          <Field
            name="select"
            label="Select"
            fullWidth
            options={['hallo', 'this', 'are', 'options']}
            component={SelectField}
          />
          <Field
            name="select"
            label="Native Select"
            native
            fullWidth
            options={['hallo', 'this', 'are', 'options']}
            component={SelectField}
          />
        </FormSectionContent>
      </FormSection>
      <FormSection>
        <FormSectionHeader>Section Time</FormSectionHeader>
        <FormSectionContent>
          <Field required name="time" label="Time" component={TimeField} />
          <Field
            required
            name="date"
            label="Date"
            fullWidth
            component={DateField}
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
            name="regex"
            label="Regex"
            helperText="Write a regex"
            component={RegexField}
          />
          <Field
            fullWidth
            name="regex"
            label="Regex with Tester"
            helperText="Write a regex"
            showTester
            component={RegexField}
          />
          <Field
            fullWidth
            multiline
            name="bio"
            label="Bio"
            rows={5}
            component={TextField}
          />
          <Field
            fullWidth
            name="choice"
            label="Choice"
            options={['test', 'test2']}
            helperText="Test"
            component={ChoiceField}
          />
          <Field
            fullWidth
            name="number"
            label="Number"
            max={10}
            min={-10}
            helperText="Between -10 and 10"
            component={NumberField}
          />
          <Field
            fullWidth
            name="source"
            label="Code Field"
            component={CodeField}
          />
          <FieldArray
            fullWidth
            name="sources"
            label="Code Field Array"
            component={CodeFieldArray}
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

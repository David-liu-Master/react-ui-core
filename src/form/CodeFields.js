import React from 'react';
import PropTypes from 'prop-types';
import { Field } from './';
import CodeField from './CodeField';
import TextField from './TextField';

class CodeFieldArray extends React.Component {
  static propTypes = {
    fields: PropTypes.array.isRequired
  };

  render() {
    const { fields } = this.props;
    return fields.map((field, i) => (
      <div>
        <CodeField name={`${field}.source`} key={i} {...field} />
      </div>
    ));
  }
}

export default CodeFieldArray;

import React from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import CodeEditor from '../CodeEditor';

const aceOnBlur = onBlur => (event, editor) => {
  const value = editor.getValue();
  onBlur(value);
};

const CodeField = ({ input, label, meta: { touched, error }, ...custom }) => (
  <div style={{ width: '100%' }}>
    {label && <InputLabel>{label}</InputLabel>}
    <CodeEditor {...input} height="100px" onBlur={aceOnBlur(input.onBlur)} />
  </div>
);

export default CodeField;

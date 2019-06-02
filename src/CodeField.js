import React from 'react';
import PropTypes from 'prop-types';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import FormHelperText from '@material-ui/core/FormHelperText';

import CodeEditor from './CodeEditor';
import { modes } from './CodeEditor';

const aceOnBlur = onBlur => (event, editor) => {
  const value = editor.getValue();
  onBlur(value);
};

class CodeField extends React.Component {
  static propTypes = {
    input: PropTypes.shape({
      value: PropTypes.string,
      onChange: PropTypes.func
    }),
    label: PropTypes.node,
    meta: PropTypes.shape({
      touched: PropTypes.bool,
      error: PropTypes.string
    }),
    margin: PropTypes.oneOf(['none', 'dense', 'normal']),
    fullWidth: PropTypes.bool,
    helperText: PropTypes.node,
    required: PropTypes.bool
  };

  static defaultProps = {
    margin: 'normal',
    meta: {},
    input: {
      value: '',
      onChange: () => {}
    }
  };

  state = {
    mode: 'java'
  };

  handleModeChange = e => {
    this.setState({
      mode: e.target.value
    });
  };

  render() {
    const {
      input,
      label,
      meta: { touched, error },
      margin,
      fullWidth,
      helperText,
      required,
      ...custom
    } = this.props;
    return (
      <FormControl
        margin={margin}
        fullWidth={fullWidth}
        error={touched && error}
        required={required}
      >
        {label && <FormLabel>{label}</FormLabel>}
        <CodeEditor
          height="100%"
          maxLines={40}
          minLines={10}
          {...input}
          {...custom}
          mode={this.state.mode}
          onBlur={aceOnBlur(input.onBlur)}
        />
        <select value={this.state.mode} onChange={this.handleModeChange}>
          {modes.map(mode => (
            <option key={mode} value={mode}>
              {mode}
            </option>
          ))}
        </select>
        {helperText && <FormHelperText>{helperText}</FormHelperText>}
      </FormControl>
    );
  }
}

export default CodeField;

import React from 'react';
import PropTypes from 'prop-types';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

import CodeEditor from '../CodeEditor';
import { modes } from '../CodeEditor';

const aceOnBlur = onBlur => (event, editor) => {
  const value = editor.getValue();
  onBlur(value);
};

class CodeField extends React.Component {
  static propTypes = {
    input: PropTypes.object,
    label: PropTypes.string,
    meta: PropTypes.shape({
      touched: PropTypes.bool,
      error: PropTypes.string
    }),
    margin: PropTypes.oneOf(['none', 'dense', 'normal'])
  };

  static defaultProps = {
    margin: 'normal'
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
      meta: { error },
      ...custom
    } = this.props;
    return (
      <FormControl {...custom} error={error}>
        {label && (
          <FormLabel {...custom} error={error}>
            {label}
          </FormLabel>
        )}
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
      </FormControl>
    );
  }
}

export default CodeField;

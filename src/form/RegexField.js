import React from 'react';
import PropTypes from 'prop-types';
import { Trans } from '@lingui/macro';
import MuiTextField from '@material-ui/core/TextField';

class RegexField extends React.Component {
  static propTypes = {
    input: {
      onChange: PropTypes.func.isRequired,
      value: PropTypes.string
    },
    showTester: PropTypes.bool
  };

  state = {
    test: '',
    match: false,
    testError: undefined
  };

  componentDidUpdate(prevProps) {
    if (prevProps.input.value !== this.props.input.value) {
      this.isMatching();
    }
  }

  handleTestChange = e => {
    this.setState(
      {
        test: e.target.value
      },
      this.isMatching
    );
  };

  isMatching = () => {
    const { test } = this.state;
    const {
      input: { value }
    } = this.props;
    const result = this.validateRegex(value);
    if (result == undefined) {
      this.setState({
        match: RegExp(value).test(test),
        testError: undefined
      });
    } else {
      this.setState({
        testError: result,
        match: false
      });
    }
  };

  validateRegex = value => {
    try {
      RegExp(value);
      return undefined;
    } catch (e) {
      return e.message;
    }
  };

  render() {
    const {
      input,
      label,
      meta: { touched, error },
      showTester,
      ...custom
    } = this.props;
    const { test, match, testError } = this.state;
    return (
      <React.Fragment>
        <MuiTextField
          label={label}
          error={touched && error}
          variant="outlined"
          margin="dense"
          {...input}
          {...custom}
        />
        {showTester && (
          <MuiTextField
            label={
              <Trans>Regular Expression Tester {match ? '(MATCH)' : ''}</Trans>
            }
            helperText={testError}
            value={test}
            onChange={this.handleTestChange}
            style={{
              backgroundColor: match
                ? 'rgba(144, 238, 144, 0.3)'
                : 'rgba(240, 128, 128, 0.3)'
            }}
            variant="filled"
            fullWidth
            multiline
          />
        )}
      </React.Fragment>
    );
  }
}
export default RegexField;

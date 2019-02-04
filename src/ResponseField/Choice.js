import React from 'react';
import PropTypes from 'prop-types';
import _map from 'lodash/map';
import Markdown from '../MarkdownRenderer';
import Radio from '@material-ui/core/Radio/Radio';
import Checkbox from '@material-ui/core/Checkbox/Checkbox';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

class Choice extends React.Component {
  onChange = (checked, id) => {
    const { value, multiple, onChange } = this.props;
    let nextValue = multiple ? { ...value } : {};
    if (!checked) {
      delete nextValue[id];
    } else {
      nextValue[id] = true;
    }
    onChange(nextValue);
  };

  render() {
    const { choices, value, multiple } = this.props;
    return (
      <FormControl component="fieldset">
        <FormGroup>
          {_map(choices, (choice, i) => (
            <FormControlLabel
              key={i}
              control={
                multiple ? (
                  <Checkbox
                    checked={value[i] === true}
                    onChange={(e, checked) => this.onChange(checked, i)}
                    color="primary"
                  />
                ) : (
                  <Radio
                    checked={value[i] === true}
                    onChange={(e, checked) => this.onChange(checked, i)}
                    color="primary"
                  />
                )
              }
              label={<Markdown source={choice} escapeHtml={false} />}
            />
          ))}
        </FormGroup>
      </FormControl>
    );
  }
}
Choice.propTypes = {
  onChange: PropTypes.func,
  multiple: PropTypes.bool,
  choices: PropTypes.array,
  value: PropTypes.object
};

Choice.defaultProps = {
  onChange: () => {},
  multiple: false,
  choices: [],
  value: {}
};

export default Choice;

import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';

class Form extends React.Component {
  static propTypes = {
    onSubmit: PropTypes.func
  };

  static defaultProps = {
    onSubmit: () => {}
  };

  render() {
    const { onSubmit, ...props } = this.props;
    return <Typography component="form" onSubmit={onSubmit} {...props} />;
  }
}

export default Form;

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from '@reach/router';
import Typography from '@material-ui/core/Typography';

function LinkCell({ value, row, linkBuilder, ...cellProps }) {
  return (
    <Typography component={Link} to={linkBuilder(value, row, cellProps)}>
      {value}
    </Typography>
  );
}

LinkCell.propTypes = {
  id: PropTypes.any,
  value: PropTypes.string,
  row: PropTypes.object,
  linkBuilder: PropTypes.func
};

LinkCell.defaultProps = {
  linkBuilder: value => value
};

export default LinkCell;

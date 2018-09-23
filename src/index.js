import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Trans } from '@lingui/macro';
import Button from '@material-ui/core/Button';

class Index extends Component {
  render() {
    const { onClick } = this.props;
    return (
      <div>
        <h2>
          <Trans id="core.welcome">Welcome to React components</Trans>
        </h2>
        <Button onClick={onClick}>
          <Trans id="core.clickMe">Click Me</Trans>
        </Button>
      </div>
    );
  }
}

Index.propTypes = {
  onClick: PropTypes.func
};

Index.defaultProps = {
  onClick: () => {}
};

export default Index;

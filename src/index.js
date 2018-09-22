import React, { Component } from 'react';
import { Trans } from '@lingui/macro';
import Button from '@material-ui/core/Button';

export default class extends Component {
  render() {
    return (
      <div>
        <h2>
          <Trans id="core.welcome">Welcome to React components</Trans>
        </h2>
        <Button>
          <Trans id="core.clickMe">Click Me</Trans>
        </Button>
      </div>
    );
  }
}

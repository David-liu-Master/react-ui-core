import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Trans } from '@lingui/macro';
import Typography from '@material-ui/core/Typography';

import BlankCenteredLayout from './BlankCenteredLayout';
import Card from './Card';
import CardContent from './CardContent';
import CardButton from './CardButton';

import Warning from './images/Warning';

const styles = theme => ({
  container: {
    maxWidth: 400
  },
  title: {
    fontSize: theme.fontSize.units[2],
    margin: theme.spacing(1),
    fontWeight: 500,
    textAlign: 'center'
  }
});

class NotFound extends React.Component {
  static propTypes = {
    classes: PropTypes.object.isRequired
  };

  handleBack = () => {
    window.history.back();
  };

  render() {
    const { classes } = this.props;
    return (
      <BlankCenteredLayout>
        <Card className={classes.container}>
          <CardContent>
            <Typography className={classes.title} variant="h1">
              <Trans id="openpatch.ui-core.not-found">
                The page you are looking for was not found!
              </Trans>
            </Typography>
            <Warning />
          </CardContent>
          <CardButton onClick={this.handleBack}>
            <Trans id="openpatch.ui-core.return-to-last-page">
              Return to last viewed page
            </Trans>
          </CardButton>
        </Card>
      </BlankCenteredLayout>
    );
  }
}

export default withStyles(styles)(NotFound);

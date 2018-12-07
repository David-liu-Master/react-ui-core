import React from 'react';
import PropTypes from 'prop-types';
import { Trans } from '@lingui/macro';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';
import withMobileDialog from '@material-ui/core/withMobileDialog';

class ConfirmDialog extends React.Component {
  render() {
    const {
      fullScreen,
      open,
      onConfirm,
      onCancel,
      content,
      title,
      disableBackdropClick
    } = this.props;
    return (
      <Dialog
        disableBackdropClick={disableBackdropClick}
        aria-labelledby="confirmation-dialog-title"
        fullScreen={fullScreen}
        open={open}
        onClose={onCancel}
      >
        <DialogTitle id="confirmation-dialog-title">{title}</DialogTitle>
        <DialogContent>{content}</DialogContent>
        <DialogActions>
          <Button onClick={onCancel} color="primary">
            <Trans id="openpatch.ui-core.cancel">Cancel</Trans>
          </Button>
          <Button onClick={onConfirm} color="primary">
            <Trans id="openpatch.ui-core.confirm">Confirm</Trans>
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

ConfirmDialog.propTypes = {
  open: PropTypes.bool,
  onConfirm: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
  title: PropTypes.node,
  fullScreen: PropTypes.bool,
  content: PropTypes.node,
  disableBackdropClick: PropTypes.bool
};

ConfirmDialog.defaultProps = {
  open: false,
  fullScreen: false,
  disableBackdropClick: true
};

export default withMobileDialog()(ConfirmDialog);

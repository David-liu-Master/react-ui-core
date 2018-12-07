import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import ConfirmDialog from './ConfirmDialog';
import { getDialogById } from './redux/dialog/selectors';
import { cancel, confirm, init } from './redux/dialog/actions';

class ReduxConfirmDialog extends React.Component {
  static propsTypes = {
    ...ConfirmDialog.propTypes,
    id: PropTypes.string.isRequired,
    onCancel: PropTypes.func,
    onConfirm: PropTypes.func
  };

  static defaultProps = {
    onCancel: () => {},
    onConfirm: () => {}
  };

  componentDidMount() {
    const { init } = this.props;
    init();
  }

  handleCancel = () => {
    const { onCancel, onReduxCancel } = this.props;
    onCancel();
    onReduxCancel();
  };

  handleConfirm = () => {
    const { onConfirm, onReduxConfirm } = this.props;
    onConfirm();
    onReduxConfirm();
  };

  render() {
    return (
      <ConfirmDialog
        {...this.props}
        onCancel={this.handleCancel}
        onConfirm={this.handleConfirm}
      />
    );
  }
}

const mapStateToProps = (state, { id }) => ({
  open: getDialogById(id)(state)
});

const mapDispatchToProps = (dispatch, { id }) => ({
  onReduxConfirm: () => dispatch(confirm(id)),
  onReduxCancel: () => dispatch(cancel(id)),
  init: () => dispatch(init(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReduxConfirmDialog);

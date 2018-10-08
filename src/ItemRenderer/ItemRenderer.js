import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import { Trans } from '@lingui/macro';

import MarkdownRenderer from '../MarkdownRenderer';
import { changeNote, changeResponse } from './actions';

class ItemRenderer extends React.Component {
  onNoteChange = e => {
    const { onNoteChange, dispatch } = this.props;
    const note = e.target.value;
    onNoteChange(note);
    dispatch(changeNote(note));
  };

  onResponseChange = (value, id) => {
    const { onResponseChange, dispatch } = this.props;
    onResponseChange(value, id);
    dispatch(changeResponse(value, id));
  };

  render() {
    return <div>ItemRenderer</div>;
  }
}

ItemRenderer.propTypes = {
  item: PropTypes.object,
  state: PropTypes.object,
  hidden: PropTypes.bool,
  dispatch: PropTyes.func,
  onResponseChange: PropTypes.func,
  onNoteChange: PropTypes.func
};

ItemRenderer.defaultProps = {
  item: {},
  state: {},
  hidden: false,
  dispatch: () => {},
  onResponseChange: () => {},
  onNoteChange: () => {}
};

export default ItemRenderer;


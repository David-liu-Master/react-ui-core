import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import { Trans } from '@lingui/macro';
import _get from 'lodash/get';
import _map from 'lodash/map';

import MarkdownRenderer from './MarkdownRenderer';
import { changeNote, changeResponse } from './redux/item-renderer/actions';

const styles = () => ({});

export class ItemRenderer extends React.Component {
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
    const { FormatRenderer, item, state, hidden, dispatch } = this.props;

    if (!FormatRenderer) {
      return <Trans id="openpatch.ui-core.unsupported">Unsupported</Trans>;
    }

    const assignment = _get(item, ['assignment']);
    const publicContent = _get(item, ['content', 'public']);
    const responses = _get(item, ['responses']);

    return (
      <div style={{ display: !hidden ? 'block' : 'none' }}>
        {assignment && (
          <Paper>
            <div>
              <Typography>
                <Trans id="openpatch.ui-core.assignment">Assignment</Trans>
              </Typography>
            </div>
            <div>
              <MarkdownRenderer source={assignment} />
            </div>
          </Paper>
        )}
        {publicContent && (
          <Paper>
            <FormatRenderer
              dispatch={dispatch}
              {...state}
              content={publicContent}
            />
          </Paper>
        )}
        {responses &&
          _map(responses, (value, key) => <Paper key={key}>{value}</Paper>)}
      </div>
    );
  }
}

ItemRenderer.propTypes = {
  classes: PropTypes.object.isRequired,
  FormatRenderer: PropTypes.element,
  item: PropTypes.shape({
    format: PropTypes.shape({
      type: PropTypes.string
    }),
    assignment: PropTypes.string,
    content: PropTypes.shape({
      public: PropTypes.object
    }),
    responses: PropTypes.objectOf(PropTypes.object),
    allow_note: PropTypes.bool
  }),
  state: PropTypes.object,
  hidden: PropTypes.bool,
  dispatch: PropTypes.func,
  onResponseChange: PropTypes.func,
  onNoteChange: PropTypes.func
};

ItemRenderer.defaultProps = {
  item: {},
  FormatRenderer: null,
  state: {},
  hidden: false,
  dispatch: () => {},
  onResponseChange: () => {},
  onNoteChange: () => {}
};

export default withStyles(styles)(ItemRenderer);

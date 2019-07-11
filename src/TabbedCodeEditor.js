import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import CodeEditor from './CodeEditor';

const styles = theme => {
  const borderColor =
    theme.palette.type === 'light'
      ? 'rgba(0, 0, 0, 0.23)'
      : 'rgba(255, 255, 255, 0.23)';

  return {
    root: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.paper,
      borderColor,
      borderTopLeftRadius: theme.shape.borderRadius,
      borderTopRightRadius: theme.shape.borderRadius,
      borderStyle: 'solid',
      borderWidth: 1
    }
  };
};

class TabbedCodeEditor extends React.Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    onChange: PropTypes.func,
    editors: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string.isRequired
      })
    )
  };

  static defaultProps = {
    onChange: () => {},
    editors: []
  };

  state = {
    tab: 0
  };

  handleTabChange = (event, value) => {
    this.setState({ tab: value });
  };

  handleValueChange = value => {
    const { editors, onChange } = this.props;
    const editor = editors[this.state.tab];
    onChange(editor.label, value);
  };

  render() {
    const { classes, editors } = this.props;
    return (
      <div>
        <div className={classes.root}>
          <Tabs
            value={this.state.tab}
            onChange={this.handleTabChange}
            variant="scrollable"
            scrollButtons="on"
            indicatorColor="primary"
            textColor="primary"
          >
            {editors.map(editor => (
              <Tab key={editor.label} label={editor.label} />
            ))}
          </Tabs>
        </div>
        {editors.map((editor, i) => (
          <div
            key={editor.label}
            style={{ display: i == this.state.tab ? 'block' : 'none' }}
            className={classes.tabContainer}
          >
            <CodeEditor {...editor} onChange={this.handleValueChange} />
          </div>
        ))}
      </div>
    );
  }
}

export default withStyles(styles)(TabbedCodeEditor);

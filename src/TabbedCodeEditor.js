import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import CodeEditor from './CodeEditor';

const styles = theme => ({
  tabContainer: {
    paddingTop: theme.spacing.units[0]
  }
});

class TabbedCodeEditor extends React.Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    editors: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string.isRequired
      })
    )
  };

  static defaultProps = {
    editors: []
  };

  constructor(props) {
    super(props);
    const values = {};
    props.editors.forEach(editor => {
      values[editor.label] = editor.defaultValue || '';
    });
    this.state = {
      tab: 0,
      values
    };
  }

  handleTabChange = (event, value) => {
    this.setState({ tab: value });
  };

  handleValueChange = value => {
    const values = { ...this.state.values };
    const editorLabel = this.props.editors[this.state.tab].label;
    values[editorLabel] = value;
    this.setState({
      values
    });
  };

  render() {
    const { classes, editors } = this.props;
    return (
      <div>
        <AppBar position="static" color="default">
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
        </AppBar>
        {editors.map((editor, i) => (
          <div
            key={editor.label}
            style={{ display: i == this.state.tab ? 'block' : 'none' }}
            className={classes.tabContainer}
          >
            <CodeEditor
              {...editor}
              value={this.state.values[editor.label]}
              onChange={this.handleValueChange}
            />
          </div>
        ))}
      </div>
    );
  }
}

export default withStyles(styles)(TabbedCodeEditor);

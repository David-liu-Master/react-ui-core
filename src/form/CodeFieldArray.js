import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Button from '@material-ui/core/Button';

import { Field } from './';
import CodeField from './CodeField';
import TextField from './TextField';

class CodeFieldArray extends React.Component {
  static propTypes = {
    fields: PropTypes.array.isRequired
  };

  state = {
    tab: 0
  };

  handleTabChange = (event, value) => {
    this.setState({ tab: value });
  };

  moveRight = () => {
    const { fields } = this.props;
    const { tab } = this.state;
    if (tab < fields.length - 1) {
      fields.swap(tab, tab + 1);
    }
  };

  moveLeft = () => {
    const { fields } = this.props;
    const { tab } = this.state;
    if (tab > 0) {
      fields.swap(tab, tab - 1);
    }
  };

  delete = () => {
    const { tab } = this.state;
    const { fields } = this.props;
    fields.remove(tab);
  };

  add = () => {
    const { fields } = this.props;
    fields.push();
  };

  render() {
    const { fields } = this.props;
    return (
      <div style={{ width: '100%' }}>
        <AppBar position="static" color="default">
          <Tabs
            value={this.state.tab}
            onChange={this.handleTabChange}
            variant="scrollable"
            scrollButtons="on"
            indicatorColor="primary"
            textColor="primary"
          >
            {fields.map((field, i) => (
              <Tab
                key={i}
                label={
                  <Field
                    name={`${field}.fileName`}
                    label="Name"
                    component={TextField}
                  />
                }
              />
            ))}
          </Tabs>
        </AppBar>
        <Field
          name={`${fields.get(this.state.tab).name}.source`}
          component={CodeField}
        />
        <Button onClick={this.add}>Add</Button>
        <Button onClick={this.delete}>Remove</Button>
        <Button onClick={this.moveLeft}>Move Left</Button>
        <Button onClick={this.moveRight}>Move Right</Button>
      </div>
    );
  }
}

export default CodeFieldArray;

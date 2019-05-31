import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Terminal } from 'xterm';
import 'xterm/lib/xterm.css';

class XTerm extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    onKey: PropTypes.func,
    onResize: PropTypes.func,
    onSelectionChange: PropTypes.func,
    onData: PropTypes.func,
    onCursorMove: PropTypes.func,
    onScroll: PropTypes.func,
    options: PropTypes.object,
    value: PropTypes.string
  };

  static defaultProps = {
    onKey: () => {},
    onResize: () => {},
    onSelectionChange: () => {},
    onData: () => {},
    onCursorMove: () => {},
    onScroll: () => {},
    objects: {},
    value: ''
  };

  constructor(props) {
    super(props);
    this.xtermDiv = React.createRef();
    ['fit', 'webLinks'].forEach(addon => this.applyAddon(addon));
  }

  applyAddon(addonName) {
    const addon = require(`xterm/lib/addons/${addonName}/${addonName}.js`);
    Terminal.applyAddon(addon);
  }

  handleResize() {
    const { onResize } = this.props;

    this.xterm.fit();
    onResize({ cols: this.xterm.cols, rows: this.xterm.rows });
  }

  componentDidMount() {
    const {
      onKey,
      onData,
      onSelectionChange,
      onScroll,
      onCursorMove,
      options,
      value
    } = this.props;

    this.xterm = new Terminal(options);
    this.xterm.open(this.xtermDiv.current);
    this.xterm.fit();
    this.xterm.write(value);

    window.addEventListener('resize', this.handleResize);

    this.xterm.on('key', onKey);
    this.xterm.on('data', onData);
    this.xterm.on('cursormove', onCursorMove);
    this.xterm.on('selection', onSelectionChange);
    this.xterm.on('scroll', onScroll);
  }

  componentWillUnmount() {
    this.xterm.destroy();
    this.xterm = null;

    window.removeEventListener('resize', this.handleResize);
  }

  componentDidUpdate() {
    const { value } = this.props;

    this.xterm.write(value);
  }

  render() {
    return <div ref={this.xtermDiv} />;
  }
}

export default XTerm;

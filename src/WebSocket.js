import React, { Component } from 'react';
import PropTypes from 'prop-types';

class WebSocket extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    url: PropTypes.string.isRequired,
    onClose: PropTypes.func,
    onError: PropTypes.func,
    onMessage: PropTypes.func,
    onOpen: PropTypes.func,
    reconnect: PropTypes.bool,
    reconnectInterval: PropTypes.number
  };

  static defaultProps = {
    onClose: () => {},
    onError: () => {},
    onMessage: () => {},
    onOpen: () => {},
    reconnect: true,
    reconnectInterval: 5000
  };

  constructor(props) {
    super(props);

    const ws = new window.WebSocket(this.props.url);
    this.state = {
      ws
    };
  }

  shouldComponentUpdate() {
    return false;
  }

  setupWebSocket = () => {
    const { ws } = this.state;
    const {
      url,
      onOpen,
      onClose,
      onError,
      onMessage,
      reconnect,
      reconnectInterval
    } = this.props;

    ws.addEventListener('open', onOpen);
    ws.addEventListener('close', () => {
      onClose();
      if (reconnect) {
        this.timeoutID = setTimeout(() => {
          this.setState(
            {
              ws: new window.WebSocket(url)
            },
            this.setupWebSocket
          );
        }, reconnectInterval);
      }
    });
    ws.addEventListener('error', onError);
    ws.addEventListener('message', onMessage);
  };

  componentDidMount() {
    this.setupWebSocket();
  }

  componentWillUnmount() {
    const { ws } = this.state;
    clearTimeout(this.timeoutID);
    ws.close();
  }

  sendMessage(message) {
    const { ws } = this.state;
    ws.send(message);
  }

  render() {
    return <div />;
  }
}

export default WebSocket;

import React from 'react';
import { storiesOf } from '@storybook/react';

import WebSocket from '../src/WebSocket';

const WebSocketOrg = () => {
  const [message, setMessage] = React.useState('');
  const [count, setCounter] = React.useState(0);
  const [open, setOpen] = React.useState(false);
  const websocket = React.useRef(null);

  const postMessage = () => {
    websocket.current.sendMessage(
      'Rock it with HTML5 WebSocket times ' + count
    );
    setCounter(count + 1);
  };

  return (
    <div>
      {message}
      <br />
      <button
        style={{ backgroundColor: open ? '#0F0' : '#F00' }}
        onClick={postMessage}
      >
        Post
      </button>
      <WebSocket
        ref={websocket}
        onOpen={() => setOpen(true)}
        onError={e => console.log(e)}
        url="wss://echo.websocket.org"
        onMessage={m => setMessage(m.data)}
      />
    </div>
  );
};

storiesOf('WebSocket', module).add('websocket.org', () => <WebSocketOrg />);

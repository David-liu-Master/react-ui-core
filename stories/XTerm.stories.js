import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import XTerm from '../src/XTerm';
import WebSocket from '../src/WebSocket';

const XTermWS = () => {
  const websocket = React.useRef(null);
  const xterm = React.useRef(null);

  const setValue = value => {
    xterm.current.write(value);
  };

  const sendData = data => {
    websocket.current.sendMessage(
      JSON.stringify({
        event: 'key',
        data
      })
    );
  };

  const sendResize = data => {
    websocket.current.sendMessage(
      JSON.stringify({
        event: 'resize',
        data
      })
    );
  };

  return (
    <div>
      <WebSocket
        ref={websocket}
        url="ws://192.168.255.10:8000/ws"
        onMessage={m => setValue(JSON.parse(m.data).stdx)}
      />
      <XTerm
        ref={xterm}
        onData={sendData}
        onResize={sendResize}
        options={{
          cursorBlink: true,
          macOptionIsMeta: true,
          scrollback: true
        }}
      />
    </div>
  );
};

storiesOf('XTerm', module)
  .add('normal', () => <XTerm />)
  .add('with value', () => <XTerm value="cd ../home" />)
  .add('with events', () => (
    <XTerm
      onKey={action('key')}
      onResize={action('resize')}
      onData={action('data')}
      onCursorMove={action('cursormove')}
      onSelectionChange={action('selection')}
      onScroll={action('scroll')}
    />
  ))
  .add('with options', () => (
    <XTerm
      options={{
        cursorBlink: true,
        macOptionIsMeta: true,
        scrollback: true
      }}
    />
  ))
  .add('websocket', () => <XTermWS />);

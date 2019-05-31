import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import XTerm from '../src/XTerm';
import WebSocket from '../src/WebSocket';

const XTermWS = () => {
  const [value, setValue] = React.useState('');
  const websocket = React.useRef(null);

  const sendData = data => {
    websocket.current.sendMessage(data);
  };
  return (
    <div>
      <WebSocket
        ref={websocket}
        url="wss://echo.websocket.org"
        onMessage={m => setValue(m.data)}
      />
      <XTerm value={value} onData={sendData} />
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

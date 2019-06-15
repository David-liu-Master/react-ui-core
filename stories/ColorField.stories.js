import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';

import ColorField from '../src/ColorField';

const MockChange = () => {
  const [value, setValue] = useState(undefined);

  const handleValue = e => {
    if (e.target != undefined) {
      setValue(e.target.value);
    } else {
      setValue(e);
    }
  };

  return <ColorField input={{ value, onChange: handleValue }} meta={{}} />;
};

storiesOf('ColorField', module)
  .add('normal', () => (
    <ColorField
      input={{
        value: '#F0F'
      }}
      meta={{}}
      label="Color"
    />
  ))
  .add('change', () => <MockChange />);

import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import CodeField from '../src/CodeField';

storiesOf('CodeField', module)
  .add('blank', () => <CodeField />)
  .add('fullWidth', () => <CodeField fullWidth />)
  .add('error', () => (
    <CodeField
      label="Code Field"
      helperText="with error"
      meta={{ error: true, touched: true }}
      fullWidth
    />
  ))
  .add('required', () => (
    <CodeField
      label="Code Field"
      helperText="with error"
      required
      meta={{ error: true, touched: true }}
      fullWidth
    />
  ))
  .add('input', () => (
    <CodeField
      label="Code Field"
      helperText="Only insert real code!"
      fullWidth
      input={{
        onChange: action('changed'),
        value: `class Bits {


    /*

     * Methods for unpacking primitive values from byte arrays starting at

     * given offsets.

     */


    static boolean getBoolean(byte[] b, int off) {

        return b[off] != 0;

    }


    static char getChar(byte[] b, int off) {

        return (char) ((b[off + 1] & 0xFF) +

                       (b[off] << 8));

    }


    static short getShort(byte[] b, int off) {

        return (short) ((b[off + 1] & 0xFF) +

                        (b[off] << 8));

    }


    static int getInt(byte[] b, int off) {

        return ((b[off + 3] & 0xFF)      ) +

               ((b[off + 2] & 0xFF) <<  8) +

               ((b[off + 1] & 0xFF) << 16) +

               ((b[off    ]       ) << 24);

    }
    `
      }}
    />
  ));

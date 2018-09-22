import React, { Component } from 'react';
import { render } from 'react-dom';
import { I18nProvider } from '@lingui/react';

import messagesEn from '@lingui/loader!../../src/locale/en/messages.json';
import messagesDe from '@lingui/loader!../../src/locale/de/messages.json';

import Example from '../../src';

const catalogs = {
  en: messagesEn,
  de: messagesDe
};

class Demo extends Component {
  state = {
    language: 'en'
  };

  onLanguageChange = e => {
    this.setState({
      language: e.target.value
    });
  };

  render() {
    return (
      <I18nProvider language={this.state.language} catalogs={catalogs}>
        <div>
          <select value={this.state.language} onChange={this.onLanguageChange}>
            <option value="en">english</option>
            <option value="de">deutsch</option>
          </select>
          <h1>frontend Demo</h1>
          <Example />
        </div>
      </I18nProvider>
    );
  }
}

render(<Demo />, document.querySelector('#demo'));

import React from 'react';

import brace from 'brace';
import AceEditor from 'react-ace';

import 'brace/theme/github';
import 'brace/mode/markdown';

class CodeEditor extends React.Component {
  render() {
    return <AceEditor theme="github" mode="markdown" {...this.props} />;
  }
}

export default CodeEditor;

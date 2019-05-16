import React from 'react';

import AceEditor from 'react-ace';

import 'brace/theme/github';
import 'brace/mode/markdown';

class CodeEditor extends React.Component {
  render() {
    return (
      <AceEditor
        theme="github"
        mode="markdown"
        width="100%"
        showPrintMargin={false}
        editorProps={{ $blockScrolling: Infinity }}
        {...this.props}
      />
    );
  }
}

export default CodeEditor;

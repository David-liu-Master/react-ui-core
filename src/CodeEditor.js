import React from 'react';

import AceEditor from 'react-ace';

import 'ace-builds/src-noconflict/theme-github';

export const modes = ['java', 'python', 'markdown'];

modes.forEach(mode => require(`ace-builds/src-noconflict/mode-${mode}`));

class CodeEditor extends React.Component {
  render() {
    return (
      <AceEditor
        fontSize={14}
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

import React from 'react';

import AceEditor from 'react-ace';

import 'brace/theme/github';

export const modes = ['java', 'python', 'markdown'];

modes.forEach(mode => require(`brace/mode/${mode}`));

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

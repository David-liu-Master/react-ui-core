import React from 'react';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';
import CodeBlock from './CodeBlock';

import 'highlight.js/styles/github.css';

class MarkdownRenderer extends React.PureComponent {
  render() {
    const { renderers, ...props } = this.props;
    return (
      <ReactMarkdown
        {...props}
        renderers={{
          code: CodeBlock,
          ...renderers
        }}
      />
    );
  }
}

MarkdownRenderer.propTypes = {
  renderers: PropTypes.object
};

MarkdownRenderer.defaultProps = {
  renderers: {}
};

export default MarkdownRenderer;

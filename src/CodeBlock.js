/**
 *
 * CodeBlock
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import hljs from 'highlight.js/lib/highlight';

['java'].forEach(langName => {
  // Using require() here because import() support hasn't landed in Webpack yet
  const langModule = require(`highlight.js/lib/languages/${langName}`);
  hljs.registerLanguage(langName, langModule);
});

class CodeBlock extends React.PureComponent {
  constructor(props) {
    super(props);
    this.setRef = this.setRef.bind(this);
  }

  setRef(el) {
    this.codeEl = el;
  }

  componentDidMount() {
    if (this.props.language) {
      this.highlightCode();
    }
  }

  componentDidUpdate() {
    if (this.props.language) {
      this.highlightCode();
    }
  }

  highlightCode() {
    hljs.highlightBlock(this.codeEl);
  }

  render() {
    const { language, value, ...props } = this.props;
    return (
      <pre>
        <code ref={this.setRef} className={language} {...props}>
          {value}
        </code>
      </pre>
    );
  }
}

CodeBlock.defaultProps = {
  language: null,
  value: null
};

CodeBlock.propTypes = {
  value: PropTypes.string,
  language: PropTypes.string
};

export default CodeBlock;

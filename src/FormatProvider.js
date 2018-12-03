import React from 'react';
import PropTypes from 'prop-types';

export const FormatContext = React.createContext();

class FormatProvider extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    const { reducer } = this.props;
    this.setState(reducer(undefined, {}));
  }

  dispatch = action => {
    const { reducer } = this.props;
    const nextState = reducer(this.state, action);
    this.setState(nextState);
  };

  render() {
    return (
      <FormatContext.Provider
        value={{
          state: this.state,
          dispatch: this.dispatch
        }}
      >
        {this.props.children}
      </FormatContext.Provider>
    );
  }
}

FormatProvider.propTypes = {
  children: PropTypes.element.isRequired,
  reducer: PropTypes.func.isRequired
};

export default FormatProvider;

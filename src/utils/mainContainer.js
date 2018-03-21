import React from 'react';

const mainContainer = ComposedComponent => {
  class MainContainer extends React.Component {
    render() {
      return (
        <ComposedComponent {...this.props} />
      );
    }
  }
  return MainContainer;
}

export default mainContainer;
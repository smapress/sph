const React = require('react');

class Content extends React.Component {

  render() {
    return this.props.children;
  }
}

export { Content as default}
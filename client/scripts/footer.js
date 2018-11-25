const React = require('react');

class Footer extends React.Component {

  render() {
    return (
      <div>
        Footer
        {this.props.children}
      </div>
    );
  }
}

export { Footer as default}
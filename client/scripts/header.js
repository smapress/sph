import React from 'react';
import Menu from './menu'

class Header extends React.Component {
  render() {
    return (
      <div>
        <Menu/>
        {this.props.children}
      </div>
    );
  }
}

export { Header as default}

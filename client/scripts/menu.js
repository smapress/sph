const React = require('react');

import MenuList from './menu_list'

class Menu extends React.Component {
  render() {
    return (
      <div className="menu-box">
        < MenuList/>
      </div>
    );
  }
}

export { Menu as default}

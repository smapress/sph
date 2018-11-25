const React = require('react');

import Header from './header'
import Content from './content'
import Footer from './footer'

class App extends React.Component {

  render() {
    return (
      <div>
        <Header/>
        <Content>
          {this.props.children}
        </Content>
        <Footer/>
      </div>
    );
  }
}

export { App as default}

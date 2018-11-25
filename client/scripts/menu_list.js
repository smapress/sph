import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
class MenuList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      focused: 0,
      items: []
    };
  }

  componentDidMount() {
    axios.get(window.location.origin + '/api/menu/list',  { params: {path: window.location.pathname} } )
      .then(({ data })=> {
        this.setState({
          items: data.navLinks,
          focused: data.focused
        });
      })
      .catch((err) => this.setState({ err }));

    console.log('componentDidMount');
  }

  componentDidUpdate() {
    console.log('componentDidUpdate');
  }

  clicked(index) {
    if (this.state.focused !== index) {
      this.setState({focused: index});
    }
  };

  render() {
    return (
      <div className={'menu-box__nav navbar'}>
        <div className={'collapse navbar-collapse'}>
          <ul className={'nav navbar-nav navbar-left'}>
            {
              this.state.items.map((i, index) => {
                let style = '';

                if(this.state.focused === index){
                  style = 'active';
                }
                return (
                  <li key={index} className={style} onClick={() => { this.clicked(index)} }>
                    <Link to={i.href}>{i.label}</Link>
                  </li>
                )
              })
            }
          </ul>
        </div>
      </div>
    );
  }
}

export { MenuList as default}
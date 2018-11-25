import React from 'react';
import Slider from './slider'

class Home extends React.Component {
  render() {
    const container = document.getElementsByClassName('container-fluid');
    return (
      <div>
        <Slider container={container}/>
        <div className={'container-fluid'}/>
      </div>
    );
  }
}

export { Home as default}
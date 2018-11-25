import React from 'react';
import axios from 'axios';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      slider: [],
      sliderHeight: window.outerHeight,
      sliderWidth: window.outerWidth,
      container: this.props.container
    }
  }

  componentDidMount() {
    axios.get(window.location.origin + '/api/slider/list', {
      params: { w: this.state.sliderWidth, h: this.state.sliderHeight, method: 'fill' }})
      .then(({ data })=> {
        this.setState({
          slider: data,
        });
      })
      .catch((err) => this.setState({ err }));
  }

  render() {
    return (
      <div className="slider" style={{width: this.state.sliderWidth}}>
        {this.state.slider.length && this.state.slider.map((i) => {
          const sliderAllWidth = { width: this.state.sliderWidth * i.photo.length };
          return (
            <div key={i._id} className="slider__horizontal" style={sliderAllWidth}>
              {i.photo.map((p) => {
                return <img className="slider__img" key={p._id} src={p.url}/>
              })}
            </div>
          )
        })}
      </div>
    );
  }
}

export { Header as default}

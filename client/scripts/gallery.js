import React from 'react';
import { Row, Col } from 'reactstrap';
import axios from 'axios';

class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      galleries: []
    };
  }

  componentDidMount() {
    axios.get(window.location.origin + '/api/galleries/list', {
      params: { size: parseInt(window.innerWidth / 4, 10), method: 'fill' }})
      .then(({ data })=> {
        this.setState({
          galleries: data.galleries,
        });
      })
      .catch((err) => console.log(err));

    console.log('componentDidMount');
  }

  componentDidUpdate() {
    console.log('componentDidUpdate');
  }

  render() {
    return (
      this.state.galleries.map((i) => {
        let galleryImg = {'background-image': `url(${i.mainPhoto.url})`};
        return (
          <Row key={i._id} className={'gallery-image'}>
            <Col key={i._id} md={12}>
              <span>{i.title}</span>
            </Col>
            {i.photo.map((p) => {
              return (
                <Col key={p._id} md={3}>
                  <div className="photo">
                    <img className="photo__photo-img" key={p._id} src={p.url} alt={p.title}/>
                  </div>
                </Col>
              )
            })}
          </Row>
        )
      })
    );
  }
}

export { Gallery as default}

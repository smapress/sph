const ReactDOM = require('react-dom');
const React = require('react');

import { BrowserRouter as Router, Route, Switch, IndexRoute, browserHistory } from 'react-router-dom';
import App from './application'
import Home from './home'
import Blog from './blog'
import Gallery from './gallery'
import Contacts from './contacts'

ReactDOM.render((
  <Router history={ browserHistory }>
    <App>
      <Switch>
        <Route exact={true} path="/" component={Home} />
        <Route path="/blog" component={Blog} />
        <Route path="/gallery" component={Gallery} />
        <Route path="/contact" component={Contacts} />
      </Switch>
    </App>
  </Router>
), document.getElementById('root'));

import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './Header';
import Root from './Root';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Root} />
          </Switch>
          <Header />
        </div>
      </Router>
    );
  }
}

export default App;

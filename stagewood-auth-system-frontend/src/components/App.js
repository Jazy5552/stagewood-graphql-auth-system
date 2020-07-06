import React from 'react';
import LinkList from 'components/LinkList';
import Error404 from 'components/errors/Error404';
import Header from 'components/Header';
import { Switch, Route } from 'react-router-dom';
import 'styles/App.css';

function App() {
  return (
    <div className="App center w85">
      <Header />
      <div className="ph3 pv1 background-gray">
        <Switch>
          <Route exact path="/" component={LinkList} />
          <Route path="/" component={Error404} />
        </Switch>
      </div>
    </div>
  );
}

export default App;

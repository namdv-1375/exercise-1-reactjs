import React from 'react';
import User from './components/user'
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.min.css';


class App extends React.Component {
  render() {
    return (
      <div>
        <User />
      </div>
    );
  }
}

export default App;
import React from 'react';
import ReactDOM from 'react-dom';

import App from './app';

class Main extends React.Component {
  render() {
    return (
      <React.StrictMode>

        <App />
       
      </React.StrictMode>
    );
  }
}
ReactDOM.render(<Main />, document.getElementById('root'));

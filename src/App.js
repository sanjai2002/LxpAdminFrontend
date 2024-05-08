import { BrowserRouter, Route, Router } from 'react-router-dom'

import Loginpage from './View/LoginPage';
import { Provider } from 'react-redux';
import store from './store';

import Routing from './routes/Routing';

function App() {
  //localStorage.setItem('id',1)
  return (
    <div className="App">
      <Provider store={store}>
      <Routing/>
      </Provider>

    </div>
  );
}

export default App;

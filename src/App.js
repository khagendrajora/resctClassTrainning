import logo from './logo.svg';
import './App.css';
import MyRoute from './MyRoute';
import TestNav from './TestNav';
import store from './redux/store';
import {Provider} from 'react-redux'
//provider is used to pass data from reducer to component

function App() {
  return (
    <>
    <Provider store={store}>
    <MyRoute/>
    </Provider>
    </>

  );
}

export default App;

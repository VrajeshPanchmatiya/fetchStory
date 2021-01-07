import logo from './logo.svg';
import './App.css';
import GetAestroidId from './Components/GetAestroidId';
import GetAestroidDetail from './Components/GetAestroidDetail';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
        <Route exact path='/' component={GetAestroidId}/>
        <Route path='/GetAestroidDetail' component={GetAestroidDetail}/>
        </Switch>
      </Router>
     </div>
  );
}

export default App;

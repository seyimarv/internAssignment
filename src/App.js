import {BrowserRouter, Switch, Route} from 'react-router-dom';
import './App.css';
import Homepage from './pages/HomePage/Homepage';
import InnerPage from './pages/innerpage/innerpage';

function App() {
  return (
    <div className="app">
    <BrowserRouter>
      <Switch>
       <Route exact path = '/' component={Homepage} />
       <Route path ={`/innerpage/:pageName`}component={InnerPage} />
      </Switch>
    
     </BrowserRouter>
     </div>

  );
}

export default App;

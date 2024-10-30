import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from "./components/Login";
import './App.css';

function App() {
  return (
    <div className="App">
          <Router> 
               <Routes> //determines which route should be rendered based on the current URL. 
                  <Route exact path="/" element = { <Login />}> //"Route" allows you to define individual routes and the path. When the value for the path is matched, then the element specified will be executed.</Route>
               </Routes>
          </Router>
    </div>
  );
}

export default App;

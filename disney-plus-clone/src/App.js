import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from "./components/Login";
import Header from './components/Header';
import Home from './components/Home';
import './App.css';
import Detail from './components/Detail';

function App() {
  return (
    <div className="App">
          <Router> 
            <Header />
               <Routes> //determines which route should be rendered based on the current URL. 
                  <Route exact path="/" element = { <Login />}> //"Route" allows you to define individual routes and the path. When the value for the path is matched, then the element specified will be executed.</Route>
                  <Route exact path="/home" element = { <Home />}> //"Route" allows you to define individual routes and the path. When the value for the path is matched, then the element specified will be executed.</Route>
                  <Route exact path="/detail/:id" element = { <Detail />}> //"Route" allows you to define individual routes and the path. When the value for the path is matched, then the element specified will be executed.</Route>
               </Routes>
          </Router>
    </div>
  );
}

export default App;



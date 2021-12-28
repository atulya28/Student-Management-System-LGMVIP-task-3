import './App.css';
import Signup from './Signup'
import Login from './Login'
import Dashboard from './Dashboard'
import Result from './Result'

import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import MainMarks from './MainMarks';

function App() {
  return (
    <div className="App">
        <Router>
        <Routes>
          <Route path = "/" element={<Signup />}>
          </Route>
          <Route path = "/login" element={<Login />}>
          </Route>
          <Route path = "/dashboard" element={<Dashboard />}>
          </Route>
          <Route path = "/result" element={<MainMarks />}>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

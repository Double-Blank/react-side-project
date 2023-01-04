import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './App.css';
import './style.css';
import Counter from './01/count'

const routes = [
  ["01 Counter", Counter]
]

function App() {
  return (
    <Router>
      <div className="App">
        <ul className="sider">
          {routes.map(([label]) => (
            <li>
              <Link to={`/${label.replace(" ", "/")}`}>{label}</Link>
            </li>
          ))}
        </ul>
        <div id="pageContainer" className="page-container">
          <Routes>
            {routes.map(([label, Component, additionalRoute = ""]) => {
              return (
                <Route
                  key={label}
                  path={`/${label.replace(" ", "/")}${additionalRoute}`}
                  element={<Component />}
                >
                </Route>
              )
            })}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

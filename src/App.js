import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './App.css';
import './style.css';
import Welcome from './welcom'
import NotFound from './404'
import Counter from './01/count'
import TestWithD3 from './02/d3'
import D3Move from './03/d3'
import VideoJS from './04/videoJS'

const routes = [
  ["01 Counter", Counter],
  ["02 D3", TestWithD3],
  ["03 D3-Move", D3Move],
  ["04 VideoJS", VideoJS]
]

function App() {
  return (
    <Router>
      <div className="App">
        <ul className="sider">
          {routes.map(([label]) => (
            <li key={label}>
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
            <Route path="/" element={<Welcome></Welcome>}>
            </Route>
            <Route path="*" element={<NotFound></NotFound>}></Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

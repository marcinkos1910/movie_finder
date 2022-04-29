import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import './App.css';
import Search from './Search';
import DetailView from './DetailView';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Search />}/>
          <Route path="/movie/:id" element={<DetailView />}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;

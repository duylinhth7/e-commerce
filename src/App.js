import { Route, Routes } from 'react-router-dom';
import './App.css';
import LayoutDefault from './layouts/layoutDefault';
import Home from './pages/Home';
import IphonePage from './pages/iPhone.page';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LayoutDefault />}>
          <Route path="/" element={<Home />} />
          <Route path="/iphone" element={<IphonePage />}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;

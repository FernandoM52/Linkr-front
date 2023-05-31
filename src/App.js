import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" />
        <Route path="/" />
        <Route path="/home" element={<HomePage />} />
        <Route path="/" />
        <Route path="/" />
        <Route path="/" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

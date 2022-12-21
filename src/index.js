import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './index.scss';
import Home from './pages/Home/Home';
import Destination from './pages/Destination/Destination';
import Crew from './pages/Crew/Crew';
import Technology from './pages/Technology/Technology';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="/destination" element={<Destination />} />
        <Route path="/crew" element={<Crew />} />
        <Route path="/technology" element={<Technology />} />
        </Route>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);



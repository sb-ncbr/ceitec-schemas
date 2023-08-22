import { BrowserRouter, Outlet, Route, Router, Routes } from 'react-router-dom';
import './App.css';
import Layout from './Components/Layout';
import Home from './Pages/Home';

function App() {
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
}

export default App;

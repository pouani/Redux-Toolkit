import React from 'react';
import Layout from './module/Layout';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UserList from './module/user/UserList';
import UserForm from './module/user/UserForm';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<UserList />} />
          <Route path="/add" element={<UserForm />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Form, Thanks } from './pages'; 

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="thanks" element={<Thanks />} />
      </Routes>
    </div>
  )
}

export default App
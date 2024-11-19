import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Index from './pages/Index';  // Index.jsx をインポート

function App() {
  return (
    <Router>
      <div className="App">
        {/* ルートパス '/' で Index コンポーネントを表示 */}
        <Routes>
          <Route path="/" element={<Index />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
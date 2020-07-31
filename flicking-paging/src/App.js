import React from 'react';
import FlickingPaging from './components/FlickingPaging';
import './App.css';

function App() {
  return (
    <div className="App">
      <FlickingPaging itemList={["panel 1", "panel 2", "panel 3", "panel 4", "panel 5"]}></FlickingPaging>
    </div>
  );
}

export default App;

import React from 'react';
import Card, { CardVariant } from './components/Card';

function App() {
  return (
    <div className="App">
      <h1>Working!</h1>
      <Card width='500px' height='500px' variant={CardVariant.outlined} onClick={() => console.log("Click")}>
        <button>Click me pls</button>
      </Card>
    </div>
  );
}

export default App;

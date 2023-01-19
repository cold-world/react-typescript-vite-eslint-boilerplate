import React, { useState } from 'react';

function App() {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <button type="button" onClick={() => setCounter(counter + 1)}>
        {counter}
      </button>
    </div>
  );
}

export default App;

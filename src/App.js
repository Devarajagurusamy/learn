import Square from './Square';
import Input from './Input';
import { useState } from 'react';

function App() {

  const [color, setColor] = useState('');
  const [hexValue, setHexValue] = useState('');
  const [isDarkText, setIsDarkText] = useState(true);

  return (
    <div>
      <Square
        color={color}
        hexValue={hexValue}
        isDarkText={isDarkText}
      />
      <Input
        setColor={setColor}
        setHexValue={setHexValue}
        setIsDarkText={setIsDarkText}
      />
    </div>
  );
}

export default App;

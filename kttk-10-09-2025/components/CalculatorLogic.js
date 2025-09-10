import React, { useState } from 'react';
import CalculatorUI from './Calculator';

export default function CalculatorLogic() {
  const [display, setDisplay] = useState('');
  const [numA, setNumA] = useState(null);
  const [operator, setOperator] = useState(null);

  const handlePress = (val) => {
    if (val >= '0' && val <= '9') {
      setDisplay(display + val);
    } else if (['+', '-', '*', '/'].includes(val)) {
      if (display !== '') {
        setNumA(parseFloat(display));
        setDisplay('');
        setOperator(val);
      }
    } else if (val === 'Del') {
      setDisplay('');
      setNumA(null);
      setOperator(null);
    } else if (val === '=') {
      if (operator && display !== '') {
        const numB = parseFloat(display);
        let result = '';
        switch (operator) {
          case '+': result = numA + numB; break;
          case '-': result = numA - numB; break;
          case '*': result = numA * numB; break;
          case '/': result = numB !== 0 ? numA / numB : 'Error'; break;
          default: break;
        }
        setDisplay(result.toString());
        setNumA(null);
        setOperator(null);
      }
    }
  };

  return <CalculatorUI display={display} onPress={handlePress} />;
}
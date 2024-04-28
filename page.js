"use client"
import { useState } from 'react'
import './globals.css'

export default function Home() {
  const [result, setResult] = useState('');
  const [expression, setExpression] = useState('');

  const handleButtonClick = (value) => {
    if (value === '=') {
      try {
        const evalResult = eval(expression).toString();
        setResult(evalResult);
        setExpression(evalResult);
      } catch (error) {
        setResult('Error');
      }
    } else if (value === 'C') {
      setResult('');
      setExpression('');
    } else {
      setExpression((prevExpression) => prevExpression + value);
    }
  };

  const buttons = [
    '7', '8', '9', '/',
    '4', '5', '6', '*',
    '1', '2', '3', '-',
    '0', '.', '=', '+',
    'C'
  ];
  const handleButtonStyle = (value) => {
    if (value == '=') {
      return ((<button
        key={value}
        id={value}
        onClick={() => handleButtonClick(value)}
        className="text-xl bg-red-300 hover:bg-blue-400 p-2 rounded-lg"

      >
        {value}
      </button>))
    } else {
      return (<button
        key={value}
        id={value}
        onClick={() => handleButtonClick(value)}
        className="text-xl bg-300 hover:bg-blue-400 p-2 rounded-lg"

      >
        {value}
      </button>)

    }

  };

  return (

    <main className="items-center flex min-h-screen flex-col  p-24">
      <h1 className="text-4xl font-bold mb-10">Bruno Pais</h1>
      <div className="items-center bg-blue p-6 rounded-lg shadow-lg">
        <input
          type="text"
          className="w-full mb-2 text-4xl border-b-2 border-red-400 focus:outline-none"
          value={expression}
          readOnly
        />
        <input
          type="text"
          className=" w-full text-5xl font-bold mb-4 focus:outline-none "
          value={result}
          readOnly
        />
        <div className="grid grid-cols-4 gap-2">
          {buttons.map((btn) => (
            handleButtonStyle(btn)
          ))}
        </div>
      </div>
    </main >
  )
}
import { useState } from 'react'

function Calculator() {
  const [display, setDisplay] = useState('0')
  const [previousValue, setPreviousValue] = useState(null)
  const [operation, setOperation] = useState(null)
  const [waitingForOperand, setWaitingForOperand] = useState(false)

  const inputNumber = (num) => {
    if (waitingForOperand) {
      setDisplay(String(num))
      setWaitingForOperand(false)
    } else {
      setDisplay(display === '0' ? String(num) : display + num)
    }
  }

  const inputOperation = (nextOperation) => {
    const inputValue = parseFloat(display)

    if (previousValue === null) {
      setPreviousValue(inputValue)
    } else if (operation) {
      const currentValue = previousValue || 0
      const newValue = calculate(currentValue, inputValue, operation)

      setDisplay(String(newValue))
      setPreviousValue(newValue)
    }

    setWaitingForOperand(true)
    setOperation(nextOperation)
  }

  const calculate = (firstValue, secondValue, operation) => {
    switch (operation) {
      case '+':
        return firstValue + secondValue
      case '-':
        return firstValue - secondValue
      case '×':
        return firstValue * secondValue
      case '÷':
        return firstValue / secondValue
      case '=':
        return secondValue
      default:
        return secondValue
    }
  }

  const performCalculation = () => {
    const inputValue = parseFloat(display)

    if (previousValue !== null && operation) {
      const newValue = calculate(previousValue, inputValue, operation)
      setDisplay(String(newValue))
      setPreviousValue(null)
      setOperation(null)
      setWaitingForOperand(true)
    }
  }

  const clear = () => {
    setDisplay('0')
    setPreviousValue(null)
    setOperation(null)
    setWaitingForOperand(false)
  }

  const inputDecimal = () => {
    if (waitingForOperand) {
      setDisplay('0.')
      setWaitingForOperand(false)
    } else if (display.indexOf('.') === -1) {
      setDisplay(display + '.')
    }
  }

  return (
    <div className="max-w-xs mx-auto mt-10 bg-gray-800 rounded-lg shadow-2xl overflow-hidden">
      {/* Display */}
      <div className="bg-gray-900 p-4">
        <div className="text-right text-white text-3xl font-mono overflow-hidden">
          {display}
        </div>
      </div>

      {/* Button Grid */}
      <div className="grid grid-cols-4 gap-1 p-4">
        {/* Row 1 */}
        <button
          className="bg-gray-500 hover:bg-gray-400 text-white font-bold py-4 px-4 rounded transition-colors"
          onClick={clear}
        >
          C
        </button>
        <button
          className="bg-gray-500 hover:bg-gray-400 text-white font-bold py-4 px-4 rounded transition-colors"
          onClick={() => {
            if (display.length > 1) {
              setDisplay(display.slice(0, -1))
            } else {
              setDisplay('0')
            }
          }}
        >
          ⌫
        </button>
        <button
          className="bg-gray-500 hover:bg-gray-400 text-white font-bold py-4 px-4 rounded transition-colors"
          onClick={() => inputOperation('÷')}
        >
          ÷
        </button>
        <button
          className="bg-orange-500 hover:bg-orange-400 text-white font-bold py-4 px-4 rounded transition-colors"
          onClick={() => inputOperation('×')}
        >
          ×
        </button>

        {/* Row 2 */}
        <button
          className="bg-gray-600 hover:bg-gray-500 text-white font-bold py-4 px-4 rounded transition-colors"
          onClick={() => inputNumber(7)}
        >
          7
        </button>
        <button
          className="bg-gray-600 hover:bg-gray-500 text-white font-bold py-4 px-4 rounded transition-colors"
          onClick={() => inputNumber(8)}
        >
          8
        </button>
        <button
          className="bg-gray-600 hover:bg-gray-500 text-white font-bold py-4 px-4 rounded transition-colors"
          onClick={() => inputNumber(9)}
        >
          9
        </button>
        <button
          className="bg-orange-500 hover:bg-orange-400 text-white font-bold py-4 px-4 rounded transition-colors"
          onClick={() => inputOperation('-')}
        >
          -
        </button>

        {/* Row 3 */}
        <button
          className="bg-gray-600 hover:bg-gray-500 text-white font-bold py-4 px-4 rounded transition-colors"
          onClick={() => inputNumber(4)}
        >
          4
        </button>
        <button
          className="bg-gray-600 hover:bg-gray-500 text-white font-bold py-4 px-4 rounded transition-colors"
          onClick={() => inputNumber(5)}
        >
          5
        </button>
        <button
          className="bg-gray-600 hover:bg-gray-500 text-white font-bold py-4 px-4 rounded transition-colors"
          onClick={() => inputNumber(6)}
        >
          6
        </button>
        <button
          className="bg-orange-500 hover:bg-orange-400 text-white font-bold py-4 px-4 rounded transition-colors"
          onClick={() => inputOperation('+')}
        >
          +
        </button>

        {/* Row 4 */}
        <button
          className="bg-gray-600 hover:bg-gray-500 text-white font-bold py-4 px-4 rounded transition-colors"
          onClick={() => inputNumber(1)}
        >
          1
        </button>
        <button
          className="bg-gray-600 hover:bg-gray-500 text-white font-bold py-4 px-4 rounded transition-colors"
          onClick={() => inputNumber(2)}
        >
          2
        </button>
        <button
          className="bg-gray-600 hover:bg-gray-500 text-white font-bold py-4 px-4 rounded transition-colors"
          onClick={() => inputNumber(3)}
        >
          3
        </button>
        <button
          className="bg-orange-500 hover:bg-orange-400 text-white font-bold py-8 px-4 rounded transition-colors row-span-2"
          onClick={performCalculation}
        >
          =
        </button>

        {/* Row 5 */}
        <button
          className="bg-gray-600 hover:bg-gray-500 text-white font-bold py-4 px-4 rounded transition-colors col-span-2"
          onClick={() => inputNumber(0)}
        >
          0
        </button>
        <button
          className="bg-gray-600 hover:bg-gray-500 text-white font-bold py-4 px-4 rounded transition-colors"
          onClick={inputDecimal}
        >
          .
        </button>
      </div>
    </div>
  )
}

export default Calculator
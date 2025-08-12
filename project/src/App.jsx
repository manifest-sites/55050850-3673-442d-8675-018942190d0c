import Monetization from './components/monetization/Monetization'
import Calculator from './components/Calculator'

function App() {

  return (
    <Monetization>
      <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center p-4">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-8">Simple Calculator</h1>
          <Calculator />
        </div>
      </div>
    </Monetization>
  )
}

export default App
import { Provider } from 'react-redux'
import './App.css'
import { store } from '../store'
import HomePage from './components/HomePage.jsx'

function App() {

  return (
    <Provider store={store}>
      <HomePage/>
    </Provider>
  )
}

export default App

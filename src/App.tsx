// import './App.css'
import MainHeader from './components/mainHeader'
import InputPrice from './components/InputPrice'
import InputData from './components/InputData'
import InputDataTable from './components/InputDataTable'
import { setupStore } from '../src/state/state';
import { Provider } from 'react-redux'

function App() {
  const store = setupStore();

  return (
    <Provider store={store}>

      <MainHeader />
      <InputPrice />
      <InputData />
      <InputDataTable />
    </Provider>
  )
}

export default App

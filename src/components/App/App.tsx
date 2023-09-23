import './App.css'
import MainHeader from '../mainHeader'
import InputPrice from '../InputPrice'
import InputData from '../InputData'
import InputDataTable from '../InputDataTable'
import { setupStore } from '../../state/state';
import { Provider } from 'react-redux'

function App() {
  const store = setupStore();

  return (
    <Provider store={store}>
<div className='App'>
      <MainHeader />
      <InputPrice />
      <InputData />
      <InputDataTable />
      </div>
    </Provider>
  )
}

export default App

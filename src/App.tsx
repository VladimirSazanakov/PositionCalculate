import { useState } from 'react'
//import './App.css'
import MainHeader from './components/mainHeader'
import InputPrice from './components/InputPrice'
import InputData from './components/InputData'
import InputDataTable from './components/InputDataTable'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <MainHeader />
     <InputPrice />
     <InputData />
     <InputDataTable />
    </>
  )
}

export default App

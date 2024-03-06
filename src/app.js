import TodosPage from './Components/todos-page'
import { ToastContainer } from 'react-toastify'
import './App.css'

function App() {
  return (
    <div className="App">
      <TodosPage />
      <ToastContainer
      position="top-center"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
      />
    </div>
  )
}

export default App

import './App.css'
import Navbar from './components/Navbar'
import AppRoutes from './routes/AppRoutes'

function App() {

  return (
    <div className='w-full h-screen overflow-x-hidden overflow-y-auto'>
      <Navbar />
      <AppRoutes />
    </div>
  )
}

export default App

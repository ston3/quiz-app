import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <div>Root Element</div>
  },
  {
    path: '/quiz',
    element: <div>Quiz component</div>
  },
  {
    path: '/result',
    element: <div>Result component</div>
  },
])

function App() {


  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App

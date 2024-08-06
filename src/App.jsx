import './App.css'
import { GlobalContext } from './context'
import { RouterProvider } from 'react-router-dom'
import {router} from './routers/index'

function App() {
  const user = {
    username: 'Admin',
  }

  return (
    <>
      {/* context = penyimpanan sementara agar tidak lempar-lemparan props dan langsung dipanggil */}
      <GlobalContext.Provider value={user}>
        <RouterProvider router={router} />
      </GlobalContext.Provider>
    </>
  )
}

export default App

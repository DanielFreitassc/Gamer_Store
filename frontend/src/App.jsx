import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./pages/home"
import "./styles.css"
import Register from "./pages/cadastro"
function App() {
  

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={
        <Home/>
      }/>
      <Route path="/cadastro" element={
        <Register/>
      }/>
    </Routes>
    </BrowserRouter>
  )
}

export default App

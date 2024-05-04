import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./pages/home"
import "./styles.css"
import Register from "./pages/cadastro"
import Details from "./pages/details"
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

      <Route path="/:id" element={
        <Details/>
      }/>
    </Routes>
    </BrowserRouter>
  )
}

export default App

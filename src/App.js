import { BrowserRouter, Route, Routes } from "react-router-dom"
import LoginPage from "./pages/LoginPage"
import CadastroPage from "./pages/CadastroPage"
import UsuarioPage from "./pages/UsuarioPage"
import { useState } from "react"

export default function App() {
  const [token, setToken] = useState(undefined)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage setToken={setToken}/>} />
        <Route path="/cadastro" element={<CadastroPage />} />
        <Route path="/usuario" element={<UsuarioPage token={token}/>} />
      </Routes>
    </BrowserRouter>
  )
}

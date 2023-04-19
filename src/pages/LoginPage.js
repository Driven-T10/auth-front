import { useState } from "react"
import styled from "styled-components"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"

export default function LoginPage({ setToken }) {
    const [form, setForm] = useState({ email: "", senha: "" })
    const navigate = useNavigate()

    function login(e) {
        e.preventDefault()

        axios.post("http://localhost:5000/login", form)
            .then((res) => {
                setToken(res.data)
                navigate("/usuario")
            })

    }

    return (
        <Conteiner>
            <h1>Login</h1>
            <Formulario onSubmit={login}>
                <input
                    placeholder="E-mail"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                />
                <input
                    placeholder="Senha"
                    value={form.senha}
                    onChange={(e) => setForm({ ...form, senha: e.target.value })}
                />
                <button type="submit">Enviar</button>
            </Formulario>
            <Link to="/cadastro">Ir para Cadastro</Link>
        </Conteiner>
    )
}

const Conteiner = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: calc(100vw - 20px);
    height: 90vh;
    h1 {
        color: lightcoral;
    }
`
const Formulario = styled.form`
    display: flex;
    flex-direction: column;
    gap: 15px;
    width: 80%;
    margin-bottom: 20px;
    input {
        
        height: 30px;
        border-radius: 10px;
        border: 1px solid black;
        padding: 5px 20px;
    }
    button {
        height: 40px;
        border-radius: 10px;
        border: none;
        background-color: lightcoral;
        font-size: 20px;
    }
`
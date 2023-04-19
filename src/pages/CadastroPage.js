import axios from "axios"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import styled from "styled-components"

export default function CadastroPage() {
    const [form, setForm] = useState({ nome: "", foto: "", email: "", senha: "" })
    const navigate = useNavigate()

    function cadastro(e) {
        e.preventDefault()

        axios.post("http://localhost:5000/cadastro", form)
        .then((res) => navigate("/"))
        .catch((err) => console.log(err)) 
    }

    return (
        <Conteiner>
            <h1>Cadastro</h1>
            <Formulario onSubmit={cadastro}>
                <input
                    placeholder="Nome"
                    value={form.nome}
                    onChange={(e) => setForm({ ...form, nome: e.target.value })}
                />
                <input
                    placeholder="Foto"
                    value={form.foto}
                    onChange={(e) => setForm({ ...form, foto: e.target.value })}
                />
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
            <Link to="/">Ir para Login</Link>
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
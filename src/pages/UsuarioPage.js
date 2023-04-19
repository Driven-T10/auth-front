import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"

export default function UsuarioPage({ token }) {
    const [usuario, setUsuario] = useState(undefined)
    const navigate = useNavigate()

    useEffect(() => {
        const config = {
            headers: { Authorization: `Bearer ${token}` }
        }

        axios.get("http://localhost:5000/usuario-logado", config)
            .then((res) => setUsuario(res.data))
            .catch((err) => console.log(err))
    }, [])

    if (!usuario) return <div>Carregando...</div>

    return (
        <Conteiner>
            <h1>Usuário</h1>
            <img src={usuario.foto} />
            <h2>Nome: {usuario.nome}</h2>
            <h2>E-mail: {usuario.email}</h2>
            <button onClick={() => navigate("/")}>Logout</button>
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
    h2 {
        padding: 0;
        margin: 5px;
    }
    img {
        width: 150px;
        height: 150px;
        border-radius: 100px;
        margin-bottom: 20px;
    }
    button {
        margin-top: 20px;
        width: 250px;
        height: 40px;
        border-radius: 10px;
        border: none;
        background-color: lightcoral;
        font-size: 20px;
    }
`

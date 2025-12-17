import { useState } from "react";
import Button2 from "../../shared/components/button/Button2";
import Input2 from "../../shared/components/input/input2"
import { Superior, TituloLogin } from "../styles/LoginScreen2.styles"
import { UserOutlined } from '@ant-design/icons';

const LoginScreen2 = ()=> {
    const [username, setUsername]= useState('')
    const [password, setPassword]= useState('')

    const handleUsername = (event: React.ChangeEvent<HTMLInputElement>) =>{
        setUsername(event.target.value)
    }

    const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) =>{
        setPassword(event.target.value)
    }

    const handleLogin = ()=>{
        alert(`
            Usuário: ${username},
            Senha: ${password},
            `)
    }

    return(
        <>
        <Superior/>
        <TituloLogin>TituloAntd</TituloLogin>
        <p>Subtitulo</p>
        
        <Input2 title="Usuário" placeholder="Digite aqui"
         prefix={<UserOutlined />} margin= "32px 32px" onChange={handleUsername} value={username}/>
        <Input2 title="Senha" margin="32px 32px" onChange={handlePassword} value={password}/>
        <Button2 onClick={handleLogin}>Enviar</Button2>
        </>
    )
}

export default LoginScreen2

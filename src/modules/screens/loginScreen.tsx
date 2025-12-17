import { BackgroundImage, ContainerLogin, ContainerLoginScreen, LimitedContainer, LogoImage, TitleLogin } from "../styles/LoginScreen.styles"
import Input from "../../shared/components/input/input"
import Button from "../../shared/components/button/Button"
import { useState } from "react"
import axios from 'axios';

const LoginScreen = ()=>{
    const [email, setEmail] = useState(''); // O useState é um array que na primeira posição no caso o username é o valor dele e na segunda é modificar o valor dele
     const [password, setPassword] = useState('');

    const handleEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value )
    } 

    const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value ) // O event.target.value é o texto que o usuário digitou
    } 

    const handleLogin = async () => {
        await axios({
        method: 'post',
        url: 'http://localhost:8080/auth',
        data: {
            "email":email,
            "password":password
        },
        })
        .then((result) => {
            alert(`Fez login ${result.data.accessToken}`);
            return result.data;
        })
        .catch(() =>{
            alert('Usuário e senha inválidos')
        })
    };

    return (
    <ContainerLoginScreen>
        <ContainerLogin>
            <LimitedContainer> 
            <LogoImage src="./logo.png"/>
            <TitleLogin level={2} type="secondary">LOGIN</TitleLogin>
            <Input title="Usuário" placeholder="Digite o usuário aqui" margin='32px 0px 0px' onChange={handleEmail} value={email}/>
            <Input type="password" title="Senha" 
                placeholder="Digite a senha aqui"  margin='32px 0px 0px'
                onChange={handlePassword} value={password}/>
           <Button type="primary" margin='64px 0px 16px 0px' onClick={handleLogin}>
            Entrar</Button>
            </LimitedContainer>
        </ContainerLogin>
        <BackgroundImage src="./background.jpg" />
    </ContainerLoginScreen>
    )
}

export default LoginScreen
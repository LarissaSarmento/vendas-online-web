import { BackgroundImage, ContainerLogin, ContainerLoginScreen, LimitedContainer, LogoImage, TitleLogin } from "../styles/LoginScreen.styles"
import Input from "../../shared/inputs/input/input"
import Button from "../../shared/buttons/button/Button"

const LoginScreen = ()=>{
    const [username, setUsername] = useState(''); // O useState é um array que na primeira posição no caso o username é o valor dele e na segunda é modificar o valor dele
     const [password, setPassword] = useState('');

    const handleUsername = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(event.target.value )
    } 

    const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value )
    } 

    const handleLogin = () => {
        alert(
        `username: ${username},
        password: ${password},
        `);
    };

    return (
    <ContainerLoginScreen>
        <ContainerLogin>
            <LimitedContainer> 
            <LogoImage src="./logo.png"/>
            <TitleLogin level={2} type="secondary">LOGIN</TitleLogin>
            <Input title="Usuário" placeholder="Digite o usuário aqui" margin='32px 0px 0px' onChange={handleUsername} value={username}/>
            <Input type="password" title="Senha" placeholder="Digite a senha aqui"  margin='32px 0px 0px'
             onChange={handlePassword} value={password}/>
           <Button type="primary" margin='64px 0px 16px 0px' onclick={handleLogin}>
            Entrar</Button>
            </LimitedContainer>
        </ContainerLogin>
        <BackgroundImage src="./background.jpg" />
    </ContainerLoginScreen>
    )
}

export default LoginScreen
import { BackgroundImage, ContainerLogin, ContainerLoginScreen, LimitedContainer, LogoImage, TitleLogin } from "../styles/LoginScreen.styles"
import Input from "../../shared/inputs/input/input"
const LoginScreen = ()=>{
    return (
    <ContainerLoginScreen>
        <ContainerLogin>
            <LimitedContainer>
            <LogoImage src="./logo.png"/>
            <TitleLogin level={2}>LOGIN</TitleLogin>
            <Input title="Usuário" placeholder="Digite o usuário aqui"/>
            <Input title="Senha" placeholder="Digite a senha aqui" />
            </LimitedContainer>
        </ContainerLogin>
        <BackgroundImage src="./background.jpg" />
    </ContainerLoginScreen>
    )
}

export default LoginScreen
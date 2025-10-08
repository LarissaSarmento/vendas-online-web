import { BackgroundImage, ContainerLogin, ContainerLoginScreen, LimitedContainer, LogoImage, TitleLogin } from "../styles/LoginScreen.styles"
import Input from "../../shared/inputs/input/input"
import Button from "../../shared/buttons/button/Button"

const LoginScreen = ()=>{
    return (
    <ContainerLoginScreen>
        <ContainerLogin>
            <LimitedContainer>
            <LogoImage src="./logo.png"/>
            <TitleLogin level={2} type="secondary">LOGIN</TitleLogin>
            <Input title="Usuário" placeholder="Digite o usuário aqui" margin='32px 0px 0px'/>
            <Input title="Senha" placeholder="Digite a senha aqui"  margin='32px 0px 0px'/>
           <Button type="primary" margin='64px 0px 16px 0px'>Entrar</Button>
            </LimitedContainer>
        </ContainerLogin>
        <BackgroundImage src="./background.jpg" />
    </ContainerLoginScreen>
    )
}

export default LoginScreen
import { BackgroundImage, ContainerLogin, ContainerLoginScreen, LimitedContainer, LogoImage } from "../styles/LoginScreen.styles"
import Input from "../../shared/inputs/input/input"
const LoginScreen = ()=>{
    return (
    <ContainerLoginScreen>
        <ContainerLogin>
            <LimitedContainer>
            <LogoImage src="./logo.png"/>
            <Input title="Usuário"/>
            <Input title="Senha" />
            </LimitedContainer>
        </ContainerLogin>
        <BackgroundImage src="./background.jpg" />
    </ContainerLoginScreen>
    )
}

export default LoginScreen
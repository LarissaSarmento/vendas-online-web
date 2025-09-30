import { BackgroundImage, ContainerLogin, ContainerLoginScreen, LimitedContainer, LogoImage } from "../styles/LoginScreen.styles"
import Input from "antd/es/input/Input"
const LoginScreen = ()=>{
    return (
    <ContainerLoginScreen>
        <ContainerLogin>
            <LimitedContainer>
            <LogoImage src="./logo.png"/>
            <Input />
            <Input />
            </LimitedContainer>
        </ContainerLogin>
        <BackgroundImage src="./background.jpg" />
    </ContainerLoginScreen>
    )
}

export default LoginScreen
import { BackgroundImage, ContainerLogin, ContainerLoginScreen, LimitedContainer, LogoImage } from "../styles/LoginScreen.styles"

const LoginScreen = ()=>{
    return (
    <ContainerLoginScreen>
        <ContainerLogin>
            <LimitedContainer>
            <LogoImage src="./logo.png"/>
            </LimitedContainer>
        </ContainerLogin>
        <BackgroundImage src="./background.jpg" />
    </ContainerLoginScreen>
    )
}

export default LoginScreen
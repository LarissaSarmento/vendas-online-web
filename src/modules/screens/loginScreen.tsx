import { BackgroundImage, ContainerLogin, LogoImage } from "../styles/LoginScreen.styles"

const LoginScreen = ()=>{
    return (<div>
        <BackgroundImage src="./background.png" />
        <ContainerLogin>
            <LogoImage src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fbr.freepik.com%2Ffotos-vetores-gratis%2Flogo-png&psig=AOvVaw1SGsbzOW3bPQQbyxh-rZod&ust=1758851068584000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCPC30fvk8o8DFQAAAAAdAAAAABAE"/>
        </ContainerLogin>
    </div>)
}

export default LoginScreen
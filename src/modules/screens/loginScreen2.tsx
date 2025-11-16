import Button2 from "../../shared/buttons/button/Button2";
import Input2 from "../../shared/inputs/input/input2"
import { Superior, TituloLogin } from "../styles/LoginScreen2.styles"
import { UserOutlined } from '@ant-design/icons';

const LoginScreen2 = ()=> {
    return(
        <>
        <Superior/>
        <TituloLogin>TituloAntd</TituloLogin>
        <p>Subtitulo</p>
        
        <Input2 title="Usuário" placeholder="Digite aqui" prefix={<UserOutlined />} margin= "32px 32px" />
        <Input2 title="Senha" margin="32px 32px"/>
        <Button2>Enviar</Button2>
        </>
    )
}

export default LoginScreen2

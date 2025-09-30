import { Input  as InputAntd} from 'antd';
import { BoxInput, TitleInput } from './input.styles';


const Input =() => {
    return (
    <BoxInput> 
        <TitleInput> Usuário </TitleInput>
        <InputAntd />
    </BoxInput>
    
    )
}

export default Input;
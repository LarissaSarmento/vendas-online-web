import { Input  as InputAntd} from 'antd';
import { BoxInput, TitleInput } from './input.styles';

interface InputPropss extends React.ComponentProps<typeof InputAntd>{
    title?: string;
    margin?: string;

} 
// A interface é para tipar as props do componente em TS, ou seja quais propriedades o componente aceita, se é obrigatório ou não
//Quando inserir a interrogação quer dizer que eu posso usar o title (que é uma PROP) ou não por exemplo
//  <TitleInput>{title}</TitleInput> ou  <TitleInput/>

const Input =({title,margin, ...props}:InputPropss) => {
    return (
    <BoxInput style={{margin}}> 

        {title && ( // 
            <TitleInput>{title} </TitleInput>
        )}
    {/* Acima quer dizer: Se title não existir ( não for undefined, null, nem string vazia), o react renderiza a segunda linha.
        Se title não existir, não renderia nada, ignora.

        É bom usar porque title é opcional
    */}

        <InputAntd {...props} />
        

    </BoxInput>
    
    )
}

export default Input;
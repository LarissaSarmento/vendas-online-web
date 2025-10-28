import type { ButtonProps } from "antd"
import { BFlutuante, ButtonAntd } from "./button.styles"

interface ButtonCurrentProps extends ButtonProps{
    margin?: string;
}

const Button = ({margin, ...props}: ButtonCurrentProps) => {
    return (<div>
        <ButtonAntd style={{margin}} {...props}/>
        <BFlutuante/></div> //Ao invés de fazer margin:margin, aceita só margin
)}

export default Button
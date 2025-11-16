import { Button, Flex } from 'antd';

interface TipoBotao extends React.ComponentProps<typeof Button>{
    children?: string
}

const Button2 = ({children, ...props}:TipoBotao)=>{
    return(
        <Button>{children}</Button>
    )
}

export default Button2